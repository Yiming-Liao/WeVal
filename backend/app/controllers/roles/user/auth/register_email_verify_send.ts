import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifySendValidator from '#validators/roles/user/auth/register_email_verify_send_validator'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import RegisterEmailVerifyNotification from '#mails/user/auth/register_email_verify_notification'

export async function registerEmailVerifySend({ request, response }: HttpContext) {
  // Validate
  const { email } = await request.validateUsing(registerEmailVerifySendValidator)

  // Find User
  let user = await User.findBy('email', email)

  // Create a new user if not exists yet
  if (!user) {
    user = await User.create({ email })
  } else {
    // If User exists (done email verify but not fully registered yet)
    await user.merge({ emailVerifiedAt: null }).save()
  }

  // send verification email
  try {
    await mail.send(new RegisterEmailVerifyNotification(user))
  } catch (error) {
    return response.internalServerError({
      errors: [{ message: 'Failed to send verification email' }],
    })
  }

  return response.ok({ message: 'Email sent successfully!' })
}
