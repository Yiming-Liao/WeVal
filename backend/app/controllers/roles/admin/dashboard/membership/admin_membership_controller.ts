// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Admin ]
 * Membership Controller
 * Referenced in: 'start/api/v1/roles/admin/dashboard/membership/membership_routes.ts'
 */

export default class AdminMembershipController {
  // Index
  async index(context: HttpContext) {
    const { index } = await import('#controllers/roles/admin/dashboard/membership/index')
    return index(context)
  }
}
