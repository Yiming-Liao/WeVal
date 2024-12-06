// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import orderShowValidator from '#validators/roles/user/order/order_show_validator'
import Order from '#models/order'

export async function show({ params, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { id } = await orderShowValidator.validate({ id: params.id })

  // 🗄️ Found Order
  const foundOrder = (await Order.findBy('order_id', id)) as Order

  return response.ok({ order: foundOrder })
}
