import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifySendValidator from '#validators/roles/user/auth/register_email_verify_send_validator'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import RegisterEmailVerifyNotification from '#mails/user/auth/register_email_verify_notification'
import { registerEmailVerifySendLimit } from '#limiters/roles/user/auth/register_email_verify_send_limit'
import i18n from '#services/i18n_service'

export async function registerEmailVerifySend(ctx: HttpContext) {
  const { request, response } = ctx

  // 📝 Validator (Built-in error handling)
  const { email } = await request.validateUsing(registerEmailVerifySendValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await registerEmailVerifySendLimit(ctx))) return

  // 🗄️ Find User
  let user = await User.findBy('email', email)

  // 🗄️ Create a new user if not exists
  if (!user) {
    user = await User.create({ email })
  } else {
    // If user exists (has email verified but not fully registered)
    await user.merge({ emailVerifiedAt: null }).save()
  }

  // ✉️ Send verification email
  try {
    await mail.send(new RegisterEmailVerifyNotification(user))
  } catch (error) {
    return response.internalServerError({
      errors: [
        { message: i18n.t('messages.user.auth.register_email_verify_send.error_sendEmail') },
      ],
    })
  }

  return response.ok({ message: i18n.t('messages.user.auth.register_email_verify_send.ok') })
}
