import vine from '@vinejs/vine'

const passwordForgotValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return user // user of the email not exsits -> error
      }),
  })
)

export default passwordForgotValidator
