import type { HttpContext } from '@adonisjs/core/http'
import passwordResetValidator from '#validators/roles/user/auth/password_reset_validator'
import User from '#models/user'

export async function passwordReset({ request, response }: HttpContext) {
  // Validate
  const { passwordResetToken, password } = await request.validateUsing(passwordResetValidator)

  // Find User by passwordResetToken
  const foundUser = await User.findBy('passwordResetToken', passwordResetToken)

  // Error Handling
  if (!foundUser) {
    return response.badRequest({ errors: [{ message: 'Invalid token' }] })
  }

  // Update User
  await foundUser
    .merge({ password: password, passwordResetToken: null, passwordResetExpiresAt: null })
    .save()

  return response.ok({ message: 'Successful password reset' })
}
