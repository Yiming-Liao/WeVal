import type { HttpContext } from '@adonisjs/core/http'
import passwordForgotValidator from '#validators/roles/user/auth/password_forgot_validator'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import PasswordResetNotification from '#mails/user/auth/password_reset_notification'

export async function passwordForgot({ request, response }: HttpContext) {
  // Validate  // email exists
  const { email } = await request.validateUsing(passwordForgotValidator)

  // Find User
  const foundUser = await User.findBy('email', email)

  // Send password forgot email
  try {
    await mail.send(new PasswordResetNotification(foundUser!))
  } catch (error) {
    return response.internalServerError({
      errors: [{ message: 'Failed to send password reset email' }],
    })
  }

  return response.ok({
    message: 'Successful send password reset email',
  })
}
