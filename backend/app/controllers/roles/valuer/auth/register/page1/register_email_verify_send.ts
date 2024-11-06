// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifySendValidator from '#validators/roles/valuer/auth/register/register_email_verify_send_validator'
import { registerEmailVerifySendLimit } from '#services/roles/valuer/auth/register_email_verify_send_limit'
import Valuer from '#models/valuer'
import mail from '@adonisjs/mail/services/main'
import RegisterEmailVerifyNotification from '#mails/valuer/auth/register_email_verify_notification'
import i18n from '#services/i18n_service'

export async function registerEmailVerifySend(ctx: HttpContext) {
  const { request, response } = ctx

  // 📝 Validator (Built-in error handling)
  const { email } = await request.validateUsing(registerEmailVerifySendValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await registerEmailVerifySendLimit(ctx))) return

  // 🗄️ Find Valuer
  let valuer = await Valuer.findBy('email', email)

  // 🗄️ Create a new valuer if not exists
  if (!valuer) {
    valuer = await Valuer.create({ email })
  } else {
    // If valuer exists (has email verified but not fully registered)
    await valuer.merge({ emailVerifiedAt: null }).save()
  }

  // ✉️ Send verification email
  try {
    await mail.send(new RegisterEmailVerifyNotification(valuer))
  } catch (error) {
    return response.internalServerError({
      errors: [
        { message: i18n.t('messages.valuer.auth.register_email_verify_send.error_sendEmail') },
      ],
    })
  }

  return response.ok({ message: i18n.t('messages.valuer.auth.register_email_verify_send.ok') })
}
