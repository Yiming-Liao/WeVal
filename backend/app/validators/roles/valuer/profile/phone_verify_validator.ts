import vine from '@vinejs/vine'

const phoneVerifyValidator = vine.compile(
  vine.object({
    phone: vine
      .string()
      .trim()
      .regex(/^\+\d{1,3}\d{4,14}$/)
      .maxLength(16),
    phoneVerifyCode: vine.string().trim().minLength(6).maxLength(6),
  })
)

export default phoneVerifyValidator
