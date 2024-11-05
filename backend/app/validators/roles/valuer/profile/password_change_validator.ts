import vine from '@vinejs/vine'

const passwordChangeValidator = vine.compile(
  vine.object({
    password: vine.string().trim().minLength(6).maxLength(256),
    newPassword: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(256)
      .confirmed({ confirmationField: 'newPasswordConfirm' }),
    newPasswordConfirm: vine.string().trim().minLength(6).maxLength(256),
  })
)

export default passwordChangeValidator
