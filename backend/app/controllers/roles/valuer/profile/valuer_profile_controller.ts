// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * Valuer Profile controller
 */
export default class ValuerProfileController {
  // Username change
  async usernameChange(context: HttpContext) {
    const { usernameChange } = await import('#controllers/roles/valuer/profile/username_change')
    return usernameChange(context)
  }

  // Password change
  async passwordChange(context: HttpContext) {
    const { passwordChange } = await import('#controllers/roles/valuer/profile/password_change')
    return passwordChange(context)
  }

  // Phone verify send
  async phoneVerifySend(context: HttpContext) {
    const { phoneVerifySend } = await import('#controllers/roles/valuer/profile/phone_verify_send')
    return phoneVerifySend(context)
  }

  // Phone verify
  async phoneVerify(context: HttpContext) {
    const { phoneVerify } = await import('#controllers/roles/valuer/profile/phone_verify')
    return phoneVerify(context)
  }
}
