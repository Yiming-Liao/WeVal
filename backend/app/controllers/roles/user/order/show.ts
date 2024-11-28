// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import Order from '#models/user/order'

export async function show({ params, response }: HttpContext) {
  const foundOrder = await Order.findBy('order_id', params.id)

  if (!foundOrder) {
    return response.internalServerError({ errors: [{ message: 'Not found' }] })
  }

  return response.ok({ order: foundOrder })
}
