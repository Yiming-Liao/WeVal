// [r: Valuer]

import vine from '@vinejs/vine'

const registerValidator = vine.compile(
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
    username: vine.string().trim().minLength(1).maxLength(64),
    phone: vine
      .string()
      .trim()
      .regex(/^\+\d{1,3}\d{4,14}$/)
      .maxLength(16),
    phoneVerifyCode: vine.string().trim().minLength(6).maxLength(6),
    password: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(256)
      .confirmed({ confirmationField: 'passwordConfirm' }),
    passwordConfirm: vine.string().trim().minLength(6).maxLength(256),
  })
)

export default registerValidator
