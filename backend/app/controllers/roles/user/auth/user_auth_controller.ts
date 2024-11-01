import type { HttpContext } from '@adonisjs/core/http'

/**
 * 設定 User Auth 控制器
 */
export default class UserAuthController {
  // 註冊
  async register(context: HttpContext) {
    const { register } = await import('#controllers/roles/user/auth/register')
    return register(context)
  }

  // 登入
  async login(context: HttpContext) {
    const { login } = await import('#controllers/roles/user/auth/login')
    return login(context)
  }

  // 登出
  async logout(context: HttpContext) {
    const { logout } = await import('#controllers/roles/user/auth/logout')
    return logout(context)
  }

  /**
   * Email
   */

  // 寄送驗證碼 (註冊第一頁)
  async registerEmailVerifySend(context: HttpContext) {
    const { registerEmailVerifySend } = await import(
      '#controllers/roles/user/auth/register_email_verify_send'
    )
    return registerEmailVerifySend(context)
  }

  // 驗證信箱 (註冊第一頁)
  async registerEmailVerify(context: HttpContext) {
    const { registerEmailVerify } = await import(
      '#controllers/roles/user/auth/register_email_verify'
    )
    return registerEmailVerify(context)
  }

  /**
   * Password
   */

  // 忘記密碼
  async passwordForgot(context: HttpContext) {
    const { passwordForgot } = await import('#controllers/roles/user/auth/password_forgot')
    return passwordForgot(context)
  }

  // 重設密碼
  async passwordReset(context: HttpContext) {
    const { passwordReset } = await import('#controllers/roles/user/auth/password_reset')
    return passwordReset(context)
  }
}
