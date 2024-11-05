// [r: Valuer]

import { BaseMail } from '@adonisjs/mail'
import Valuer from '#models/valuer'
import env from '#start/env'
import { AuthService } from '#services/roles/valuer/auth_service'

/**
 * [ Valuer ]
 * Register email verify notification
 */
export default class RegisterEmailVerifyNotification extends BaseMail {
  subject = 'Verify email' // Email subject
  private valuer: Valuer

  constructor(valuer: Valuer) {
    super()
    this.valuer = valuer
    this.message.to(this.valuer.email) // Email address
  }

  /**
   * Prepare email
   */
  async prepare() {
    const emailVerifyCode = await AuthService.generateEmailVerifyCode(this.valuer)

    const emailVerifyUrl = `${env.get('FRONTEND_URL')}/email-verify?emailVerifyCode=${emailVerifyCode}`

    this.message.html(`
      <h1> Verify email address </h1>
      <h2>Will Expire in 10 Minutes </h2>
      <h1> Verify code: ${emailVerifyCode} </h1>     
      <p><a href="${emailVerifyUrl}">Click here to verify your email address</a></p>
    `)
  }
}
