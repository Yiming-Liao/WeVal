// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer/valuer'
import showValidator from '#validators/roles/admin/dashboard/mambership/valuers/show_validator'

/**
 * [ Admin ]
 * Membership Valuer Controller
 * Referenced in: 'start/api/v1/roles/admin/dashboard/membership/valuer/membership_valuer_routes.ts'
 */

export default class MembershipValuersController {
  // [GET] Index
  async index({ response }: HttpContext) {
    // 🗄️ Get Valuers
    const valuers = await Valuer.query().orderBy('email', 'asc')

    return response.ok({ valuers })
  }

  // [GET] Show
  async show({ response, params }: HttpContext) {
    // 📝 Validator (Built-in error handling)
    const { email } = await showValidator.validate({ email: params.email })

    // 🗄️ Find Valuer
    const foundValuer = await Valuer.query()
      .where('email', email)
      .preload('valuerQualification')
      .first()

    return response.ok({ valuer: foundValuer })
  }

  // [PATCH] Approve
  async approve(context: HttpContext) {
    const { approve } = await import(
      '#controllers/roles/admin/dashboard/membership/valuers/approve'
    )
    return approve(context)
  }

  // [PATCH] Reject
  async reject(context: HttpContext) {
    const { reject } = await import('#controllers/roles/admin/dashboard/membership/valuers/reject')
    return reject(context)
  }
}
