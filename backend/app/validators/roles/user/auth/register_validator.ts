import vine from '@vinejs/vine'

const registerValidator = vine.compile(
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
    username: vine.string().trim().minLength(1).maxLength(64),
    password: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(512)
      .confirmed({ confirmationField: 'passwordConfirm' }),
  })
)

export default registerValidator
