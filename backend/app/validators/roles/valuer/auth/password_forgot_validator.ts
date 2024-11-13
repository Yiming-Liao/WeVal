// [r: Valuer]

import vine from '@vinejs/vine'

const passwordForgotValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        return valuer // Valuer with this Email does not exists -> error
      }),
  })
)

export default passwordForgotValidator
