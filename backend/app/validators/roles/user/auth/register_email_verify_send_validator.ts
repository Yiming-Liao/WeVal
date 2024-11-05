import vine from '@vinejs/vine'

const registerEmailVerifySendValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        if (user) {
          return !user.password // User with this email has completed registration -> error
        }
        return true
      }),
  })
)

export default registerEmailVerifySendValidator
