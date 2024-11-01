import { BaseMail } from '@adonisjs/mail'
import User from '#models/user'
import env from '#start/env'
import { UserAuthService } from '#services/user_auth_service'

export default class RegisterEmailVerifyNotification extends BaseMail {
  subject = 'Verify email'
  private user!: User // 使用非空斷言運算符

  constructor(user: User) {
    super()
    this.user = user
    this.message.to(this.user.email)
  }

  async prepare() {
    const emailVerifyCode = await UserAuthService.generateEmailVerifyCode(this.user)

    const emailVerifyUrl = `${env.get('FRONTEND_URL')}/email-verify?emailVerifyCode=${emailVerifyCode}`

    this.message.html(`
      <h1> Verify email address </h1>
      <h2>Will Expire in 10 Minutes </h2>
      <h1> Verify code: ${emailVerifyCode} </h1>     
      <p><a href="${emailVerifyUrl}">Click here to verify your email address</a></p>
    `)
  }
}
