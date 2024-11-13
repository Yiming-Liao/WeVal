// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import passwordForgotValidator from '#validators/roles/user/auth/password_forgot_validator'
import User from '#models/user/user'
import mail from '@adonisjs/mail/services/main'
import PasswordResetNotification from '#mails/user/auth/password_reset_notification'
import i18n from '#services/i18n_service'
import { passwordForgotLimit } from '#limiters/roles/user/auth/password_forgot_limit'

export async function passwordForgot(ctx: HttpContext) {
  const { request, response } = ctx

  // 📝 Validator (Built-in error handling)
  const { email } = await request.validateUsing(passwordForgotValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await passwordForgotLimit(ctx))) return

  // 🗄️ Find User
  const foundUser = await User.findBy('email', email)

  // ✉️ Send verification email
  try {
    await mail.send(new PasswordResetNotification(foundUser!))
  } catch (error) {
    console.log(error)
    return response.internalServerError({
      errors: [{ message: i18n.t('messages.user.auth.password_forgot.error_sendEmail') }],
    })
  }

  return response.ok({
    message: i18n.t('messages.user.auth.password_forgot.ok'),
  })
}
