import vine from '@vinejs/vine'

const phoneVerifyValidator = vine.compile(
  vine.object({
    phone: vine
      .string()
      .trim()
      .regex(/^\+\d{1,3}\d{4,14}$/)
      .maxLength(16)
      .unique(async (query, field) => {
        const valuer = await query.from('valuers').where('phone', field).first()
        return !valuer // Valuer with this phone already exist -> error
      }),
    phoneVerifyCode: vine.string().trim().minLength(6).maxLength(6),
  })
)

export default phoneVerifyValidator
