import vine from '@vinejs/vine'

const phoneVerifySendValidator = vine.compile(
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
  })
)

export default phoneVerifySendValidator
