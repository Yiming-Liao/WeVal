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
        return user // user of the email not exsits -> error
      })
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return !user.password // user of the email finished full registration -> error
      }),
    emailVerifyCode: vine.string().trim(),
  })
)

export default registerEmailVerifyValidator
