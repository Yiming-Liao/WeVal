// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import usernameChangeValidator from '#validators/roles/valuer/profile/username_change_validator'
import i18n from '#services/i18n_service'

export async function usernameChange({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { username } = await request.validateUsing(usernameChangeValidator)

  // 🗄️ Update Valuer
  const updatedValuer = await auth.user!.merge({ username: username }).save()

  return response.ok({
    message: i18n.t('messages.user.profile.username_change.ok'),
    valuer: updatedValuer.serialize(),
  })
}
