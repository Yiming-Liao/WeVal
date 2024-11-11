// [r: Admin]

import Valuer from '#models/valuer'
import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Admin ]
 * Membership Valuer Controller
 * Referenced in: 'start/api/v1/roles/admin/dashboard/membership/valuer/membership_valuer_routes.ts'
 */

export default class MembershipValuerController {
  // Index
  async index({ response }: HttpContext) {
    const valuers = await Valuer.query().orderBy('email', 'asc')

    return response.ok({
      // message: i18n.t('messages.user.auth.login.ok'),
      valuers,
    })
  }

  // Show
  async show({ response, params }: HttpContext) {
    const foundValuer = await Valuer.findBy('email', params.email)

    // 🚨 Error
    if (!foundValuer) {
      return response.badRequest({ errors: [{ message: 'Not exist.' }] })
    }

    await foundValuer.load('valuerQualification')

    return response.ok({
      // message: i18n.t('messages.user.auth.login.ok'),
      valuer: foundValuer,
    })
  }
}
