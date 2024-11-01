import vine from '@vinejs/vine'

const phoneVerifyValidator = vine.compile(
  vine.object({
    phone: vine.string().trim(),
    phoneVerifyCode: vine.string().trim(),
  })
)

export default phoneVerifyValidator
