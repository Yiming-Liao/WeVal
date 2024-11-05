// [r: Valuer]

import vine from '@vinejs/vine'

const phoneVerifySendValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .unique(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        if (valuer) {
          return !valuer.password // Valuer with this email has completed registration -> error
        }
        return true
      }),
    phone: vine
      .string()
      .trim()
      .regex(/^\+\d{1,3}\d{4,14}$/)
      .maxLength(16),
  })
)

export default phoneVerifySendValidator
