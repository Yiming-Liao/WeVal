// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import passwordResetValidator from '#validators/roles/valuer/auth/password_reset_validator'
import Valuer from '#models/valuer/valuer'
import i18n from '#services/i18n_service'
import { DateTime } from 'luxon'

export async function passwordReset({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { passwordResetToken, password } = await request.validateUsing(passwordResetValidator)

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.findBy('passwordResetToken', passwordResetToken)

  // 🚨 Error: Wrong passwordResetToken
  if (!foundValuer) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.password_reset.error_wrongToken') }],
    })
  }

  // 🚨 Error: PasswordResetToken expired
  if (
    foundValuer!.passwordResetTokenExpiresAt &&
    foundValuer!.passwordResetTokenExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.valuer.auth.password_reset.error_tokenExpired') }],
    })
  }

  // 🗄️ Update Valuer
  await foundValuer
    .merge({ password: password, passwordResetToken: null, passwordResetTokenExpiresAt: null })
    .save()

  return response.ok({ message: i18n.t('messages.valuer.auth.password_reset.ok') })
}
