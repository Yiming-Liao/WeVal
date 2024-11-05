import vine from '@vinejs/vine'

const emailVerifyValidator = vine.compile(
  vine.object({
    emailVerifyCode: vine.string().trim(),
  })
)

export default emailVerifyValidator
