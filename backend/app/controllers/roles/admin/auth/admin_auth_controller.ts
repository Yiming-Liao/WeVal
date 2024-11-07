// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Admin ]
 * Auth Controller
 * Referenced in: 'start/api/v1/roles/admin/auth/auth_routes.ts'
 */
export default class AdminAuthController {
  // Login
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/admin/auth/login')
    return login(context)
  }

  // Logout
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/admin/auth/logout')
    return logout(context)
  }

  /**
   * Password forgot & reset & change
   */
  // Password forgot
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/admin/auth/password_forgot')
    return passwordForgot(context)
  }

  // Password reset
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/admin/auth/password_reset')
    return passwordReset(context)
  }

  // Password change
  async passwordChange(context: HttpContext) {
    const { passwordChange } = await import('#controllers/roles/admin/auth/password_change')
    return passwordChange(context)
  }
}
