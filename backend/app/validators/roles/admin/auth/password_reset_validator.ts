// [r: Admin]

import vine from '@vinejs/vine'

const passwordResetValidator = vine.compile(
  vine.object({
    passwordResetToken: vine.string().trim(),
    password: vine
      .string()
      .trim()
      .minLength(6)
      .maxLength(256)
      .confirmed({ confirmationField: 'passwordConfirm' }),
    passwordConfirm: vine.string().trim(),
  })
)

export default passwordResetValidator
