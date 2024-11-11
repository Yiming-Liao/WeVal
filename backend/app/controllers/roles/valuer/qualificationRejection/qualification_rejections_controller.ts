import Valuer from '#models/valuer/valuer'
import indexValidator from '#validators/roles/valuer/qualificationRejection/index_validator'
import storeValidator from '#validators/roles/valuer/qualificationRejection/store_validator'

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ QualificationRejectionsController ]
 *
 * QualificationRejectionsController Controller
 *
 * Referenced in: 'start/api/v1/roles/valuer/valuer_routes.ts'
 */
export default class QualificationRejectionsController {
  // [GET] Index (HasOne, so index === show)
  async index({ response, params }: HttpContext) {
    // 📝 Validator (Built-in error handling)
    const { email } = await indexValidator.validate({ email: params.email })

    // 🗄️ Find Valuer
    const foundValuer = await Valuer.findBy('email', email)

    // 🗄️ Load ValuerRejectionReason
    const foundQualificationRejection = await foundValuer!
      .related('qualificationRejection')
      .query()
      .first()

    return response.ok({ qualificationRejection: foundQualificationRejection })
  }

  // [POST] Store
  async store({ request, response, params }: HttpContext) {
    // 📝 Validator (Built-in error handling)
    const { email, reason } = await storeValidator.validate({
      email: params.email,
      ...request.all(),
    })

    // 🗄️ Find Valuer
    const foundValuer = await Valuer.findBy('email', email)

    const createdQualificationRejection = await foundValuer!
      .related('qualificationRejection')
      .create({ reason: reason })

    return response.created({ qualificationRejection: createdQualificationRejection })
  }
}
