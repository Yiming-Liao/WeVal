// [r: Admin]

import vine from '@vinejs/vine'

const loginValidator = vine.compile(
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
    password: vine.string().trim().minLength(6).maxLength(256),
  })
)

export default loginValidator
