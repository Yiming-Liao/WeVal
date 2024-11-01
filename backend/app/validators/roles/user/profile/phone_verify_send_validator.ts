import vine from '@vinejs/vine'

const phoneVerifySendValidator = vine.compile(
  vine.object({
    phone: vine
      .string()
      .trim()
      .regex(/^\+\d{1,3}\d{4,14}$/),
  })
)

export default phoneVerifySendValidator
