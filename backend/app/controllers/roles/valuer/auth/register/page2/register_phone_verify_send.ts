// [r: Valuer]

import { snsClient } from '#config/aws'
import Valuer from '#models/valuer'
import i18n from '#services/i18n_service'
import { phoneVerifySendLimit } from '#limiters/roles/valuer/auth/phone_verify_send_limit'
import { AuthService } from '#services/roles/valuer/auth_service'
import phoneVerifySendValidator from '#validators/roles/valuer/auth/phone_verify_send_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { PublishCommand } from '@aws-sdk/client-sns'

export async function registerPhoneVerifySend(ctx: HttpContext) {
  const { request, response } = ctx

  // 📝 Validator (Built-in error handling)
  const { email, phone } = await request.validateUsing(phoneVerifySendValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await phoneVerifySendLimit(ctx))) return

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.findBy('email', email)

  // 🔢 Generate access token
  const phoneVerifyCode = await AuthService.generatePhoneVerifyCode(foundValuer!)

  // 💬 Send sms with OTP code
  await snsClient.send(
    new PublishCommand({
      Message: `[WeVal] Your OTP code is: ${phoneVerifyCode}. This verification code will expire in 10 minutes.`,
      PhoneNumber: phone,
    })
  )

  return response.ok({ message: i18n.t('messages.valuer.auth.register_phone_verify_send.ok') })
}
