// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import passwordChangeValidator from '#validators/roles/user/profile/password_change_validator'
import Valuer from '#models/valuer/valuer'
import i18n from '#services/i18n_service'

export async function passwordChange({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { password, newPassword } = await request.validateUsing(passwordChangeValidator)

  // 🗄️ Find User (Built-in error handling)
  const verifiedValuer = await Valuer.verifyCredentials(auth.user!.email, password)

  // 🗄️ Update User
  await verifiedValuer.merge({ password: newPassword }).save()

  return response.ok({ message: i18n.t('messages.user.profile.password_change.ok') })
}
