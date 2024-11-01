import type { HttpContext } from '@adonisjs/core/http'
import passwordChangeValidator from '#validators/roles/user/profile/password_change_validator'
import User from '#models/user'

export async function passwordChange({ request, response, auth }: HttpContext) {
  // Validate
  const { password, newPassword } = await request.validateUsing(passwordChangeValidator)

  // verified User
  const verifiedUser = await User.verifyCredentials(auth.user!.email, password)

  // Change password
  await verifiedUser.merge({ password: newPassword }).save()

  return response.ok({ message: 'Successful password change' })
}
