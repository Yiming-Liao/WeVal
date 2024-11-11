// [r: User]

import { BaseMail } from '@adonisjs/mail'
import User from '#models/user/user'
import env from '#start/env'
import { AuthService } from '#services/roles/user/auth_service'

/**
 * [ User ]
 * Register email verify notification
 */
export default class RegisterEmailVerifyNotification extends BaseMail {
  subject = 'Verify email' // Email subject
  private user: User

  constructor(user: User) {
    super()
    this.user = user
    this.message.to(this.user.email) // Email address
  }

  /**
   * Prepare email
   */
  async prepare() {
    const emailVerifyCode = await AuthService.generateEmailVerifyCode(this.user)

    const emailVerifyUrl = `${env.get('FRONTEND_URL')}/email-verify?emailVerifyCode=${emailVerifyCode}`

    this.message.html(`
      <h1> Verify email address </h1>
      <h2>Will Expire in 10 Minutes </h2>
      <h1> Verify code: ${emailVerifyCode} </h1>     
      <p><a href="${emailVerifyUrl}">Click here to verify your email address</a></p>
    `)
  }
}
