import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifyValidator from '#validators/roles/user/auth/register_email_verify_validator'
import User from '#models/user/user'
import { DateTime } from 'luxon'
import i18n from '#services/i18n_service'

export async function registerEmailVerify({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, emailVerifyCode } = await request.validateUsing(registerEmailVerifyValidator)

  // 🗄️ Find User
  let foundUser = await User.findBy('email', email)

  // 🚨 Error: Wrong emailVerifyCode
  if (foundUser!.emailVerifyCode !== emailVerifyCode) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.auth.register_email_verify.error_wrongCode') }],
    })
  }

  // 🚨 Error: EmailVerifyCode expired
  if (foundUser!.emailVerifyCodeExpiresAt && foundUser!.emailVerifyCodeExpiresAt < DateTime.now()) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.auth.register_email_verify.error_codeExpired') }],
    })
  }

  // 🗄️ Update User
  await foundUser!
    .merge({
      emailVerifiedAt: DateTime.now().toISO(),
      emailVerifyCode: null,
      emailVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({ message: i18n.t('messages.user.auth.register_email_verify.ok') })
}
