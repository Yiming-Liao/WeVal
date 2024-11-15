// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer/valuer'
import rejectValidator from '#validators/roles/admin/dashboard/mambership/valuers/reject_validator'
import FileProxyService from '#services/file_proxy_service'

export async function reject({ request, response, params }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, message } = await rejectValidator.validate({
    email: params.email,
    message: request.input('message'),
  })

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.query()
    .where('email', email)
    .preload('valuerQualification')
    .first()

  // 🪣 Delete certificate file
  await FileProxyService.delete({ key: foundValuer!.valuerQualification.certificatePath })

  // 🗄️ Delete valuerQualification
  await foundValuer!.valuerQualification.delete()

  // 🗄️ Update Valuer
  const updatedValuer = await foundValuer!
    .merge({ status: 'qualificationRejected', qualificationRejectionMessage: message })
    .save()

  return response.ok({
    message: 'Successfully rejected.',
    valuer: updatedValuer,
  })
}
