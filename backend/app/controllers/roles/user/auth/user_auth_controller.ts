// [r: User]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ User ]
 * Auth Controller
 * Referenced in: 'start/api/v1/roles/user/auth/auth_routes.ts'
 */
export default class UserAuthController {
  //*---------------------------▼-----REGISTER-----▼---------------------------
  // [POST] Register <page-1> Send email [🚧 Built-in limiter]
  async registerEmailVerifySend(context: HttpContext) {
    const { registerEmailVerifySend } = await import(
      '#controllers/roles/user/auth/register_email_verify_send'
    )
    return registerEmailVerifySend(context)
  }

  // [POST] Register <page-1> Verify email
  async registerEmailVerify(context: HttpContext) {
    const { registerEmailVerify } = await import(
      '#controllers/roles/user/auth/register_email_verify'
    )
    return registerEmailVerify(context)
  }

  // [POST] Register <page-2>
  async register(context: HttpContext) {
    const { register } = await import('#controllers/roles/user/auth/register')
    return register(context)
  }
  //*---------------------------▲-----REGISTER-----▲---------------------------

  // [POST] Login
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/user/auth/login')
    return login(context)
  }

  // [POST] Logout
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/user/auth/logout')
    return logout(context)
  }

  /**
   * Password
   */
  // [POST] Password forgot
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/user/auth/password_forgot')
    return passwordForgot(context)
  }
  // [POST] Password reset
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/user/auth/password_reset')
    return passwordReset(context)
  }
}
