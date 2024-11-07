import type { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer'

export async function index({ response }: HttpContext) {
  const valuers = await Valuer.query().preload('valuerQualification')

  return response.ok({
    // message: i18n.t('messages.user.auth.login.ok'),
    valuers,
  })
}
