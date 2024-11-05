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
        return user // User with this Email does not exists -> error
      })
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return !user.password // User with this email has completed registration -> error
      }),
    username: vine.string().trim().minLength(1).maxLength(64),
    password: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(256)
      .confirmed({ confirmationField: 'passwordConfirm' }),
    passwordConfirm: vine.string().trim().minLength(6).maxLength(256),
  })
)

export default registerValidator
