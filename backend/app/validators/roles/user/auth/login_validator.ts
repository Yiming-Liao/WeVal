import vine from '@vinejs/vine'

const loginValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .exists(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return user // user of the email not exsits -> error
      }),
    password: vine.string().trim().minLength(6).maxLength(32),
  })
)

export default loginValidator
