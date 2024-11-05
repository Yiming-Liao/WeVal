import type { HttpContext } from '@adonisjs/core/http'
import phoneVerifyValidator from '#validators/roles/user/profile/phone_verify_validator'
import { DateTime } from 'luxon'
import i18n from '#services/i18n_service'

export async function phoneVerify({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { phone, phoneVerifyCode } = await request.validateUsing(phoneVerifyValidator)

  // 🚨 Error: Wrong phoneVerifyCode
  if (auth.user!.phoneVerifyCode !== phoneVerifyCode) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.profile.phone_verify.error_wrongCode') }],
    })
  }

  // 🚨 Error: phoneVerifyCode expired
  if (auth.user!.phoneVerifyCodeExpiresAt && auth.user!.phoneVerifyCodeExpiresAt < DateTime.now()) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.profile.phone_verify.error_codeExpired') }],
    })
  }

  // 🗄️ Update User
  const updatedUser = await auth
    .user!.merge({
      phone,
      phoneVerifiedAt: DateTime.now().toISO(),
      phoneVerifyCode: null,
      phoneVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({
    message: i18n.t('messages.user.profile.phone_verify.ok'),
    user: updatedUser,
  })
}
