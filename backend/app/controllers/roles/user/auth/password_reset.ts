import type { HttpContext } from '@adonisjs/core/http'
import passwordResetValidator from '#validators/roles/user/auth/password_reset_validator'
import User from '#models/user/user'
import i18n from '#services/i18n_service'
import { DateTime } from 'luxon'

export async function passwordReset({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { passwordResetToken, password } = await request.validateUsing(passwordResetValidator)

  // 🗄️ Find User
  const foundUser = await User.findBy('passwordResetToken', passwordResetToken)

  // 🚨 Error: Wrong passwordResetToken
  if (!foundUser) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.auth.password_reset.error_wrongToken') }],
    })
  }

  // 🚨 Error: PasswordResetToken expired
  if (
    foundUser!.passwordResetTokenExpiresAt &&
    foundUser!.passwordResetTokenExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.auth.password_reset.error_tokenExpired') }],
    })
  }

  // 🗄️ Update User
  await foundUser
    .merge({ password: password, passwordResetToken: null, passwordResetTokenExpiresAt: null })
    .save()

  return response.ok({ message: i18n.t('messages.user.auth.password_reset.ok') })
}
