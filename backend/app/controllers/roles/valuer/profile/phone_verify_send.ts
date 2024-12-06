// [r: Valuer]

import { snsClient } from '#config/aws'
import i18n from '#services/i18n_service'
import { phoneVerifySendLimit } from '#limiters/roles/valuer/auth/phone_verify_send_limit'
import { AuthService } from '#services/roles/valuer/auth_service'
import phoneVerifySendValidator from '#validators/roles/valuer/profile/phone_verify_send_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { PublishCommand } from '@aws-sdk/client-sns'
import Valuer from '#models/valuer/valuer'

export async function phoneVerifySend(ctx: HttpContext) {
  const { request, response, auth } = ctx

  const authenticatedValuer = auth.user! as Valuer

  // 📝 Validator (Built-in error handling)
  const { phone } = await request.validateUsing(phoneVerifySendValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await phoneVerifySendLimit(ctx))) return

  // 🔢 Generate access token
  const phoneVerifyCode = await AuthService.generatePhoneVerifyCode(authenticatedValuer)

  // 💬 Send sms with OTP code
  await snsClient.send(
    new PublishCommand({
      Message: `[WeVal] Your OTP code is: ${phoneVerifyCode}. This verification code will expire in 10 minutes.`,
      PhoneNumber: phone,
    })
  )

  return response.ok({ message: i18n.t('messages.user.profile.phone_verify_send.ok') })
}
