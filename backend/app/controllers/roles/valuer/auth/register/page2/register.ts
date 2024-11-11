// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import registerValidator from '#validators/roles/valuer/auth/register/register_validator'
import Valuer from '#models/valuer/valuer'
import env from '#start/env'
import { AuthService } from '#services/roles/valuer/auth_service'
import i18n from '#services/i18n_service'
import { DateTime } from 'luxon'

export async function register({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, username, phone, phoneVerifyCode, password } =
    await request.validateUsing(registerValidator)

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.findBy('email', email)

  // Phone verify
  //**------------------------------------------------------------
  // 🚨 Error: Wrong phoneVerifyCode
  if (foundValuer!.phoneVerifyCode !== phoneVerifyCode) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.register.error_wrongCode') }],
    })
  }

  // 🚨 Error: phoneVerifyCode expired
  if (
    foundValuer!.phoneVerifyCodeExpiresAt &&
    foundValuer!.phoneVerifyCodeExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.register.error_codeExpired') }],
    })
  }
  //**------------------------------------------------------------

  // 🗄️ Update Valuer
  const updatedValuer = await foundValuer!
    .merge({
      email,
      username,
      password,
      phone,
      phoneVerifiedAt: DateTime.now().toISO(),
      phoneVerifyCode: null,
      phoneVerifyCodeExpiresAt: null,
    })
    .save()

  // 🔑 Generate access token
  const accessToken = await Valuer.accessTokens.create(updatedValuer, ['*'])

  // 🔑 Generate refresh token
  const refreshToken = await AuthService.generateRefreshToken(updatedValuer)

  return response // Refresh Token expires in 30 days (same wuth role name)
    .cookie(env.get('VALUER_REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('VALUER_ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .plainCookie(env.get('USER_ROLE_NAME'), 'valuer', { maxAge: 30 * 24 * 60 * 60, encode: false })
    .created({
      message: i18n.t('messages.valuer.auth.register.created'),
      valuer: updatedValuer.serialize(),
    })
}
