import vine from '@vinejs/vine'

const passwordChangeValidator = vine.compile(
  vine.object({
    password: vine.string().trim().minLength(6).maxLength(128),
    newPassword: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(128)
      .confirmed({ confirmationField: 'newPasswordConfirm' }),
    newPasswordConfirm: vine.string().trim(),
  })
)

export default passwordChangeValidator
