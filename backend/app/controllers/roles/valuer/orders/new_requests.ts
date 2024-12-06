// [r: Valuer]

import Order, { OrderStatus } from '#models/order'
import Valuer from '#models/valuer/valuer'
import type { HttpContext } from '@adonisjs/core/http'

export async function newRequests({ response, auth }: HttpContext) {
  const authenticatedValuer = auth.user! as Valuer
  await authenticatedValuer.load('valuerQualification')

  const availableOrders = await Order.query()
    .where('region', authenticatedValuer.valuerQualification.region)
    .where('orderStatus', OrderStatus.AWAITING_VALUER)

  return response.ok({ orders: availableOrders, count: availableOrders.length })
}
