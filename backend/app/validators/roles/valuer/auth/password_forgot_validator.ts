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
        return user // User with this Email does not exists -> error
      }),
  })
)

export default passwordForgotValidator
