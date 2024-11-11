// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import passwordResetValidator from '#validators/roles/admin/auth/password_reset_validator'
import Admin from '#models/admin/admin'
import i18n from '#services/i18n_service'
import { DateTime } from 'luxon'

export async function passwordReset({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { passwordResetToken, password } = await request.validateUsing(passwordResetValidator)

  // 🗄️ Find Admin
  const foundAdmin = await Admin.findBy('passwordResetToken', passwordResetToken)

  // 🚨 Error: Wrong passwordResetToken
  if (!foundAdmin) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.admin.auth.password_reset.error_wrongToken') }],
    })
  }

  // 🚨 Error: PasswordResetToken expired
  if (
    foundAdmin!.passwordResetTokenExpiresAt &&
    foundAdmin!.passwordResetTokenExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.admin.auth.password_reset.error_tokenExpired') }],
    })
  }

  // 🗄️ Update Admin
  await foundAdmin
    .merge({ password: password, passwordResetToken: null, passwordResetTokenExpiresAt: null })
    .save()

  return response.ok({ message: i18n.t('messages.admin.auth.password_reset.ok') })
}
