import type { HttpContext } from '@adonisjs/core/http'
import registerEmailVerifyValidator from '#validators/roles/user/auth/register_email_verify_validator'
import User from '#models/user'
import { DateTime } from 'luxon'

export async function registerEmailVerify({ request, response }: HttpContext) {
  // Validate
  const { email, emailVerifyCode } = await request.validateUsing(registerEmailVerifyValidator)

  // Find User  // Already validated is exists
  let foundUser = await User.findBy('email', email)

  // Wrong emailVerifyCode
  if (foundUser!.emailVerifyCode !== emailVerifyCode) {
    return response.badRequest({ errors: [{ message: 'Verification code is not correct' }] })
  }

  // emailVerifyCode expired
  if (foundUser!.emailVerifyCodeExpiresAt && foundUser!.emailVerifyCodeExpiresAt < DateTime.now()) {
    return response.badRequest({ errors: [{ message: 'Verification code has expired' }] })
  }

  await foundUser!
    .merge({
      emailVerifiedAt: DateTime.now().toISO(),
      emailVerifyCode: null,
      emailVerifyCodeExpiresAt: null,
    })
    .save()

  return response.ok({ message: 'Email verified successfully!' })
}
