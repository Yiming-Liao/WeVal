// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import registerQualifyValidator from '#validators/roles/valuer/auth/register/register_qualify_validator'
import Valuer from '#models/valuer/valuer'
import i18n from '#services/i18n_service'
import { cuid } from '@adonisjs/core/helpers'

export async function registerQualify({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, serviceArea, address, abn, certificateFile } =
    await request.validateUsing(registerQualifyValidator)

  // 🗄️ Find Valuer
  const foundValuer = await Valuer.findBy('email', email)

  // 🪣 Upload to S3    // eg. valuer/masouivan-gmail-com/uzr99nvnicaaf7558uyy9r3o.jpg
  const certificatePath = `valuer/${email.replace(/[@.]/g, '-')}/certificate-${cuid()}.${certificateFile.extname}`
  await certificateFile.moveToDisk(certificatePath)

  // 🗄️ Created Valuer Qualification
  await foundValuer!.related('valuerQualification').create({
    serviceArea: serviceArea,
    address,
    abn,
    certificatePath: certificatePath,
  })

  // 🗄️ Update Valuer
  await foundValuer!.merge({ status: 'qualificationCreated' }).save()

  return response.created({
    message: i18n.t('messages.valuer.auth.register_qualify.created'),
    valuer: foundValuer,
  })
}
