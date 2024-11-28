// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import { StripeService } from '#services/roles/user/stripe_service'
import User from '#models/user/user'
import { PriceRange, PRODUCT_IDS } from '#config/stripe'

export async function store({ request, response, auth }: HttpContext) {
  const payload = request.all()

  // 判斷 房價 Range
  const amount = 500 // 在這裡撰寫判斷邏輯 依照 RANGE ENUM
  const productId = PRODUCT_IDS[payload.priceRange as PriceRange]

  // Create order
  const createdOrder = await (auth.user as User).related('orders').create({
    amount,
    ...payload,
  })

  // Stripe
  const { sessionId, paymentUrl } = await StripeService.createCheckoutSession(
    createdOrder.orderId,
    productId
  )

  // Update stripe session info
  await createdOrder.merge({ sessionId, paymentUrl }).save()

  response.created({ paymentUrl })
}
