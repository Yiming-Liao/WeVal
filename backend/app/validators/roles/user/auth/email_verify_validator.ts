import vine from '@vinejs/vine'

const emailVerifyValidator = vine.compile(
  vine.object({
    emailVerifyCode: vine.string(),
  })
)

export default emailVerifyValidator
