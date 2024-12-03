// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import Order, { OrderStatus, PaymentStatus } from '#models/user/order'
import { StripeService } from '#services/roles/user/stripe_service'

export async function show({ params, response }: HttpContext) {
  const foundOrder = await Order.findBy('order_id', params.id)

  // 🚨 Error: Not found
  if (!foundOrder) return response.notFound({ errors: [{ message: 'Order not found' }] })

  // Update status: Execute only if orderStatus is UNPAID
  if (foundOrder.orderStatus === OrderStatus.UNPAID) {
    const paymentStatus = await StripeService.checkPaymentStatus(foundOrder.sessionId || 'unpaid')
    if (paymentStatus === PaymentStatus.PAID) {
      foundOrder.paymentStatus = PaymentStatus.PAID
      foundOrder.orderStatus = OrderStatus.AWAITING_VALUER
      await foundOrder.save()
    }
  }

  return response.ok({ order: foundOrder })
}
