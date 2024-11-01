import vine from '@vinejs/vine'

const usernameChangeValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
  })
)

export default usernameChangeValidator
