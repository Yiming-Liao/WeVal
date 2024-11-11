// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import passwordChangeValidator from '#validators/roles/admin/auth/password_change_validator'
import Admin from '#models/admin/admin'
import i18n from '#services/i18n_service'

export async function passwordChange({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { password, newPassword } = await request.validateUsing(passwordChangeValidator)

  // 🗄️ Find Admin (Built-in error handling)
  const verifiedAdmin = await Admin.verifyCredentials(auth.user!.email, password)

  // 🗄️ Update Admin
  await verifiedAdmin.merge({ password: newPassword }).save()

  return response.ok({ message: i18n.t('messages.admin.auth.password_change.ok') })
}
