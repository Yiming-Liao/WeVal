import vine from '@vinejs/vine'

const rejectValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        return valuer // Valuer with this Email does not exists -> error
      }),
    message: vine.string().trim(),
  })
)

export default rejectValidator
