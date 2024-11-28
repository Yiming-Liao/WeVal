// [r: User]

import Order from '#models/user/order'
import type { HttpContext } from '@adonisjs/core/http'

export async function index({ response }: HttpContext) {
  const orders = await Order.query().orderBy('created_at', 'desc')
  return response.ok({ orders })
}
