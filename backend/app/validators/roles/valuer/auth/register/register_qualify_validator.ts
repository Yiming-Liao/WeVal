// [r: Valuer]

import vine from '@vinejs/vine'

const registerQualifyValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .toLowerCase()
      .exists(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        return valuer // Valuer with this Email does not exists -> error
      })
      .unique(async (query, field) => {
        const valuer = await query.from('valuers').where('email', field).first()
        console.log(valuer.qualify)
        return !valuer.qualify // Valuer with this email has qualified -> error
      }),

    serviceArea: vine.string().trim().minLength(1).maxLength(16),
    address: vine.string().trim().minLength(1).maxLength(256),
    abn: vine.string().trim().minLength(11).maxLength(11),

    certificateFile: vine.file({
      size: 5 * 1024 * 1024, // Maximum: 5 MB
      extnames: [
        'pdf',
        'png',
        'jpeg',
        'jpg',
        'webp',
        'doc',
        'docx',
        'ppt',
        'pptx',
        'xls',
        'xlsx',
        'txt',
        'zip',
        'rar',
        'odt',
        'ods',
      ],
    }),
  })
)

export default registerQualifyValidator
