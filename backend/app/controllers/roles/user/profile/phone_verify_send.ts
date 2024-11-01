import { snsClient } from '#config/aws'
import { UserAuthService } from '#services/user_auth_service'
import phoneVerifySendValidator from '#validators/roles/user/profile/phone_verify_send_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { PublishCommand } from '@aws-sdk/client-sns'

export async function phoneVerifySend({ request, response, auth }: HttpContext) {
  const { phone } = await request.validateUsing(phoneVerifySendValidator)

  const phoneVerifyCode = await UserAuthService.generatePhoneVerifyCode(auth.user!)

  const input = {
    Message: `[WeVal] Your OTP code is: ${phoneVerifyCode}`,
    PhoneNumber: phone,
  }

  // Send sms with OTP code
  await snsClient.send(new PublishCommand(input))

  return response.ok({ message: 'Successful sent sms!' })
}
