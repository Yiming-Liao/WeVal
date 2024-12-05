import vine from '@vinejs/vine'

const orderShowValidator = vine.compile(
  vine.object({
    id: vine
      .string()
      .trim()
      .exists(async (query, field) => {
        const order = await query.from('orders').where('order_id', field).first()
        return order
      }),
  })
)

export default orderShowValidator
