import { snsClient } from '#config/aws'
import i18n from '#services/i18n_service'
import { phoneVerifySendLimit } from '#services/roles/user/auth/phone_verify_send_limit'
import { AuthService } from '#services/roles/user/auth_service'
import phoneVerifySendValidator from '#validators/roles/user/profile/phone_verify_send_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { PublishCommand } from '@aws-sdk/client-sns'

export async function phoneVerifySend(ctx: HttpContext) {
  const { request, response, auth } = ctx

  // 📝 Validator (Built-in error handling)
  const { phone } = await request.validateUsing(phoneVerifySendValidator)

  // 🚧 Limiter (Built-in error handling)
  if (!(await phoneVerifySendLimit(ctx))) return

  // 🔢 Generate access token
  const phoneVerifyCode = await AuthService.generatePhoneVerifyCode(auth.user!)

  // 💬 Send sms with OTP code
  await snsClient.send(
    new PublishCommand({
      Message: `[WeVal] Your OTP code is: ${phoneVerifyCode}. This verification code will expire in 10 minutes.`,
      PhoneNumber: phone,
    })
  )

  return response.ok({ message: i18n.t('messages.user.profile.phone_verify_send.ok') })
}
