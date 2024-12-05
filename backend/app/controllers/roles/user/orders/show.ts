// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import Order, { OrderStatus, PaymentStatus } from '#models/order'
import { StripeService } from '#services/roles/user/stripe_service'
import orderShowValidator from '#validators/roles/user/order/order_show_validator'

export async function show({ params, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { id } = await orderShowValidator.validate({ id: params.id })

  // 🗄️ Found Order
  const foundOrder = (await Order.findBy('order_id', id)) as Order

  // 🗄️ Update Order status: Execute only if orderStatus is UNPAID
  if (foundOrder.orderStatus === OrderStatus.UNPAID) {
    const paymentStatus = await StripeService.checkPaymentStatus(foundOrder.sessionId || 'unpaid')

    // Paid status detected
    if (paymentStatus === PaymentStatus.PAID) {
      foundOrder.paymentStatus = PaymentStatus.PAID
      foundOrder.orderStatus = OrderStatus.AWAITING_VALUER
      await foundOrder.save()

      /// Send invitation!
    }
  }

  return response.ok({ order: foundOrder })
}
