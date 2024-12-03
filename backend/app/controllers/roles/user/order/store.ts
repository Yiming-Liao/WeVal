// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import { StripeService } from '#services/roles/user/stripe_service'
import User from '#models/user/user'
import { PAYMENT_AMOUNT, PriceRange, PRODUCT_IDS } from '#config/stripe'

export async function store({ request, response, auth }: HttpContext) {
  const payload = request.all()

  // Define commissionAmount & productId
  const paymentAmount = PAYMENT_AMOUNT[payload.priceRange as PriceRange]
  const productId = PRODUCT_IDS[payload.priceRange as PriceRange]

  // Create new Order
  const createdOrder = await (auth.user as User).related('orders').create({
    amount: paymentAmount,
    ...payload,
  })

  // 🆂 Stripe create checkout session
  const { sessionId, paymentUrl } = await StripeService.createCheckoutSession(
    createdOrder.orderId,
    productId
  )

  // Update stripe session info
  await createdOrder.merge({ sessionId, paymentUrl }).save()

  response.created({ paymentUrl })
}
