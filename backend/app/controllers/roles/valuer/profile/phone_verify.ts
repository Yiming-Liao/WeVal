// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import phoneVerifyValidator from '#validators/roles/valuer/profile/phone_verify_validator'
import { DateTime } from 'luxon'
import i18n from '#services/i18n_service'
import Valuer from '#models/valuer/valuer'

export async function phoneVerify({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { phone, phoneVerifyCode } = await request.validateUsing(phoneVerifyValidator)

  const authenticatedValuer = auth.user! as Valuer

  // 🚨 Error: Wrong phoneVerifyCode
  if (authenticatedValuer.phoneVerifyCode !== phoneVerifyCode) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.profile.phone_verify.error_wrongCode') }],
    })
  }

  // 🚨 Error: phoneVerifyCode expired
  if (
    authenticatedValuer.phoneVerifyCodeExpiresAt &&
    authenticatedValuer.phoneVerifyCodeExpiresAt < DateTime.now()
  ) {
    return response.badRequest({
      errors: [{ message: i18n.t('messages.user.profile.phone_verify.error_codeExpired') }],
    })
  }

  // 🗄️ Update Valuer
  const updatedValuer = await auth
    .user!.merge({
      phone,
      phoneVerifiedAt: DateTime.now().toISO(),
      phoneVerifyCode: null,
      phoneVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({
    message: i18n.t('messages.user.profile.phone_verify.ok'),
    valuer: updatedValuer,
  })
}
