// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer/valuer'
import approveValidator from '#validators/roles/admin/dashboard/mambership/valuers/approve_validator'
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
    const foundValuer = await Valuer.findBy('email', email)

    // 🗄️ Load ValuerQualification
    await foundValuer!.load('valuerQualification')

    return response.ok({ valuer: foundValuer })
  }

  // [PATCH] Approve
  async approve({ response, params }: HttpContext) {
    // 📝 Validator (Built-in error handling)
    const { email } = await approveValidator.validate({ email: params.email })

    // 🗄️ Find Valuer
    const foundValuer = await Valuer.findBy('email', email)

    // 🗄️ Update Valuer
    const updatedValuer = await foundValuer!.merge({ isQualified: true }).save()

    return response.ok({ valuer: updatedValuer })
  }
}
