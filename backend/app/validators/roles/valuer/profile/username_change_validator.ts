import vine from '@vinejs/vine'

const usernameChangeValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(1).maxLength(64),
  })
)

export default usernameChangeValidator
