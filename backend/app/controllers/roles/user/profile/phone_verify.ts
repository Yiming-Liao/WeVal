import type { HttpContext } from '@adonisjs/core/http'
import phoneVerifyValidator from '#validators/roles/user/profile/phone_verify_validator'
import { DateTime } from 'luxon'

export async function phoneVerify({ request, response, auth }: HttpContext) {
  const { phone, phoneVerifyCode } = await request.validateUsing(phoneVerifyValidator)

  // Wrong phoneVerifyCode
  if (auth.user!.phoneVerifyCode !== phoneVerifyCode) {
    return response.badRequest({ errors: [{ message: 'Wrong verification code' }] })
  }

  // phoneVerifyCode expired
  if (auth.user!.phoneVerifyCodeExpiresAt && auth.user!.phoneVerifyCodeExpiresAt < DateTime.now()) {
    return response.badRequest({ errors: [{ message: 'Verification code has expired' }] })
  }

  // Save
  const updatedUser = await auth
    .user!.merge({
      phone,
      phoneVerifiedAt: DateTime.now().toISO(),
      phoneVerifyCode: null,
      phoneVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({ message: 'Successful phone verified!', user: updatedUser })
}
