import vine from '@vinejs/vine'

const registerEmailVerifyValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return user // User with this Email does not exists -> error
      })
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return !user.password // User with this email has completed registration -> error
      }),
    emailVerifyCode: vine.string().trim(),
  })
)

export default registerEmailVerifyValidator
