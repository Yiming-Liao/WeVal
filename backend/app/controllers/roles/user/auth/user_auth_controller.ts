import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ User ]
 * Auth Controller
 * Referenced in: 'start/api/v1/roles/user/auth/auth_routes.ts'
 */
export default class UserAuthController {
  // Register (Register: second page)
  async register(context: HttpContext) {
    const { register } = await import('#controllers/roles/user/auth/register')
    return register(context)
  }

  // Login
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/user/auth/login')
    return login(context)
  }

  // Logout
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/user/auth/logout')
    return logout(context)
  }

  /**
   * Email
   */
  // Email verification: send email (Register: first page)
  async registerEmailVerifySend(context: HttpContext) {
    const { registerEmailVerifySend } = await import(
      '#controllers/roles/user/auth/register_email_verify_send'
    )
    return registerEmailVerifySend(context)
  }

  // Email verification: verify and update (Register: first page)
  async registerEmailVerify(context: HttpContext) {
    const { registerEmailVerify } = await import(
      '#controllers/roles/user/auth/register_email_verify'
    )
    return registerEmailVerify(context)
  }

  /**
   * Password
   */
  // Password forgot
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/user/auth/password_forgot')
    return passwordForgot(context)
  }

  // Password reset
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/user/auth/password_reset')
    return passwordReset(context)
  }
}
