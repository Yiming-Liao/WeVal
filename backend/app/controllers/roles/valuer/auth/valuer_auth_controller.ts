// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Valuer ]
 * Auth Controller
 * Referenced in: 'start/api/v1/roles/valuer/auth/auth_routes.ts'
 */
export default class ValuerAuthController {
  //*---------------------------▼-----REGISTER-----▼---------------------------
  // [POST] Register <page-1> Send email [🚧 Built-in limiter]
  async registerEmailVerifySend(context: HttpContext) {
    const { registerEmailVerifySend } = await import(
      '#controllers/roles/valuer/auth/register/page1/register_email_verify_send'
    )
    return registerEmailVerifySend(context)
  }

  // [POST] Register <page-1> Verify email
  async registerEmailVerify(context: HttpContext) {
    const { registerEmailVerify } = await import(
      '#controllers/roles/valuer/auth/register/page1/register_email_verify'
    )
    return registerEmailVerify(context)
  }

  // [POST] Register <page-2> Send sms [🚧 Built-in limiter]
  async registerPhoneVerifySend(context: HttpContext) {
    const { registerPhoneVerifySend } = await import(
      '#controllers/roles/valuer/auth/register/page2/register_phone_verify_send'
    )
    return registerPhoneVerifySend(context)
  }

  // [POST] Register <page-2>
  async register(context: HttpContext) {
    const { register } = await import('#controllers/roles/valuer/auth/register/page2/register')
    return register(context)
  }

  // [POST] Register <page-3>
  async registerQualify(context: HttpContext) {
    const { registerQualify } = await import(
      '#controllers/roles/valuer/auth/register/page3/register_qualify'
    )
    return registerQualify(context)
  }
  //*---------------------------▲-----REGISTER-----▲---------------------------

  // [POST] Login
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/valuer/auth/login')
    return login(context)
  }

  // [POST] Logout
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/valuer/auth/logout')
    return logout(context)
  }

  /**
   * Password
   */
  // [POST] Password forgot
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/valuer/auth/password_forgot')
    return passwordForgot(context)
  }
  // [POST] Password reset
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/valuer/auth/password_reset')
    return passwordReset(context)
  }
}
