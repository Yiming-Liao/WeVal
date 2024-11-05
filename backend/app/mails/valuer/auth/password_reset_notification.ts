import { BaseMail } from '@adonisjs/mail'
import User from '#models/user'
import env from '#start/env'
import { AuthService } from '#services/roles/user/auth_service'

export default class PasswordResetNotification extends BaseMail {
  subject = 'Reset password'
  private user!: User

  constructor(user: User) {
    super()
    this.user = user
    this.message.to(this.user.email)
  }

  async prepare() {
    const passwordResetToken = await AuthService.generatePasswordResetToken(this.user)

    const passwordResetUrl = `${env.get('FRONTEND_URL')}/user/password-reset?passwordResetToken=${passwordResetToken}`

    this.message.html(`
      <h1> Reset password </h1>
      <p><a href="${passwordResetUrl}">Click here to reset your password</a></p>
    `)
  }
}
