// [r: Admin]

import { BaseMail } from '@adonisjs/mail'
import Admin from '#models/admin/admin'
import env from '#start/env'
import { AuthService } from '#services/roles/admin/auth_service'

export default class PasswordResetNotification extends BaseMail {
  subject = 'Reset password'
  private admin!: Admin

  constructor(admin: Admin) {
    super()
    this.admin = admin
    this.message.to(this.admin.email)
  }

  async prepare() {
    const passwordResetToken = await AuthService.generatePasswordResetToken(this.admin)

    const passwordResetUrl = `${env.get('FRONTEND_URL')}/admin/password-reset?passwordResetToken=${passwordResetToken}`

    this.message.html(`
      <h1> Reset password </h1>
      <p><a href="${passwordResetUrl}">Click here to reset your password</a></p>
    `)
  }
}
