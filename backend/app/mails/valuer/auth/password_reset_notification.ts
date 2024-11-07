// [r: Valuer]

import { BaseMail } from '@adonisjs/mail'
import Valuer from '#models/valuer'
import env from '#start/env'
import { AuthService } from '#services/roles/valuer/auth_service'

export default class PasswordResetNotification extends BaseMail {
  subject = 'Reset password'
  private valuer!: Valuer

  constructor(valuer: Valuer) {
    super()
    this.valuer = valuer
    this.message.to(this.valuer.email)
  }

  async prepare() {
    const passwordResetToken = await AuthService.generatePasswordResetToken(this.valuer)

    const passwordResetUrl = `${env.get('FRONTEND_URL')}/valuer/password-reset?passwordResetToken=${passwordResetToken}`

    this.message.html(`
      <h1> Reset password </h1>
      <p><a href="${passwordResetUrl}">Click here to reset your password</a></p>
    `)
  }
}
