// [r: Admin]

import vine from '@vinejs/vine'

const passwordForgotValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const admin = await query.from('admins').where('email', field).first()
        return admin // Admin with this Email does not exists -> error
      }),
  })
)

export default passwordForgotValidator
