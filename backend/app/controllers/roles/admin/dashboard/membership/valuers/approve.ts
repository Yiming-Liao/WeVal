// [r: Admin]

import Valuer from '#models/valuer/valuer'
import approveValidator from '#validators/roles/admin/dashboard/mambership/valuers/approve_validator'
import type { HttpContext } from '@adonisjs/core/http'

export async function approve({ params, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email } = await approveValidator.validate({ email: params.email })

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.findBy('email', email)

  // 🗄️ Update Valuer
  const updatedValuer = await foundValuer!.merge({ status: 'approved' }).save()

  return response.ok({ message: 'Successfully approved.', valuer: updatedValuer })
}
