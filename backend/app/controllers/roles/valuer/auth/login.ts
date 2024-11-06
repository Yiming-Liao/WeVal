// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import loginValidator from '#validators/roles/valuer/auth/login_validator'
import Valuer from '#models/valuer'
import env from '#start/env'
import { AuthService } from '#services/roles/valuer/auth_service'
import i18n from '#services/i18n_service'

export async function login({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, password } = await request.validateUsing(loginValidator)

  // 🗄️ Find Valuer (Built-in error handling)
  const foundValuer = await Valuer.verifyCredentials(email, password)

  // 🔑 Generate access token
  const accessToken = await Valuer.accessTokens.create(foundValuer!, ['*'])

  // 🔑 Generate refresh token
  const refreshToken = await AuthService.generateRefreshToken(foundValuer!)

  return response // Refresh Token expires in 30 days
    .cookie(env.get('VALUER_REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('VALUER_ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .ok({
      message: i18n.t('messages.valuer.auth.login.ok'),
      valuer: foundValuer!.serialize(),
    })
}
