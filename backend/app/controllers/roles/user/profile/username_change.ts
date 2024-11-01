import type { HttpContext } from '@adonisjs/core/http'
import usernameChangeValidator from '#validators/roles/user/profile/username_change_validator'

export async function usernameChange({ request, response, auth }: HttpContext) {
  // Validate
  const { username } = await request.validateUsing(usernameChangeValidator)

  // Change username
  const updatedUser = await auth.user!.merge({ username: username }).save()

  return response.ok({
    message: 'Successful update',
    user: updatedUser.serialize(),
  })
}
