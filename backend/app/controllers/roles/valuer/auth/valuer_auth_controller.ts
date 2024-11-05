// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Valuer ]
 * Auth Controller
 * Referenced in: 'start/api/v1/roles/valuer/auth/auth_routes.ts'
 */
export default class ValuerAuthController {
  // Register (Register: second page)
  async register(context: HttpContext) {
    const { register } = await import('#controllers/roles/valuer/auth/register')
    return register(context)
  }

  // Login
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/valuer/auth/login')
    return login(context)
  }

  // Logout
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/valuer/auth/logout')
    return logout(context)
  }

  /**
   * Email
   */
  // Email verification: send email (Register: first page)
  async registerEmailVerifySend(context: HttpContext) {
    const { registerEmailVerifySend } = await import(
      '#controllers/roles/valuer/auth/register_email_verify_send'
    )
    return registerEmailVerifySend(context)
  }

  // Email verification: verify and update (Register: first page)
  async registerEmailVerify(context: HttpContext) {
    const { registerEmailVerify } = await import(
      '#controllers/roles/valuer/auth/register_email_verify'
    )
    return registerEmailVerify(context)
  }

  /**
   * Phone
   */
  // Phone verify send (Register: second page)
  async registerPhoneVerifySend(context: HttpContext) {
    const { registerPhoneVerifySend } = await import(
      '#controllers/roles/valuer/auth/register_phone_verify_send'
    )
    return registerPhoneVerifySend(context)
  }

  /**
   * Password
   */
  // Password forgot
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/valuer/auth/password_forgot')
    return passwordForgot(context)
  }

  // Password reset
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/valuer/auth/password_reset')
    return passwordReset(context)
  }
}
