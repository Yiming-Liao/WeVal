// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifyValidator from '#validators/roles/valuer/auth/register/register_email_verify_validator'
import Valuer from '#models/valuer'
import { DateTime } from 'luxon'
import i18n from '#services/i18n_service'

export async function registerEmailVerify({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, emailVerifyCode } = await request.validateUsing(registerEmailVerifyValidator)

  // 🗄️ Find Valuer
  let foundValuer = await Valuer.findBy('email', email)

  // 🚨 Error: Wrong emailVerifyCode
  if (foundValuer!.emailVerifyCode !== emailVerifyCode) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.register_email_verify.error_wrongCode') }],
    })
  }

  // 🚨 Error: EmailVerifyCode expired
  if (
    foundValuer!.emailVerifyCodeExpiresAt &&
    foundValuer!.emailVerifyCodeExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.register_email_verify.error_codeExpired') }],
    })
  }

  // 🗄️ Update Valuer
  await foundValuer!
    .merge({
      emailVerifiedAt: DateTime.now().toISO(),
      emailVerifyCode: null,
      emailVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({ message: i18n.t('messages.valuer.auth.register_email_verify.ok') })
}
