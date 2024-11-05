// [r: Valuer]

import vine from '@vinejs/vine'

const registerEmailVerifyValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        return valuer // Valuer with this Email does not exists -> error
      })
      .unique(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        return !valuer.password // Valuer with this email has completed registration -> error
      }),
    emailVerifyCode: vine.string().trim(),
  })
)

export default registerEmailVerifyValidator
