// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import { StripeService } from '#services/roles/user/stripe_service'
import User from '#models/user/user'
import { PAYMENT_AMOUNT, PRODUCT_IDS } from '#config/stripe'
import orderStoreValidator from '#validators/roles/user/order/order_store_validator'

export async function store({ request, response, auth }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { region, address, priceRange, ownerName, ownerPhone } =
    await request.validateUsing(orderStoreValidator)

  // Define paymentAmount & productId
  const paymentAmount = PAYMENT_AMOUNT[priceRange]
  const productId = PRODUCT_IDS[priceRange]

  // 🗄️ Create new Order
  const createdOrder = await (auth.user as User).related('orders').create({
    region,
    address,
    priceRange,
    ownerName,
    ownerPhone,
    amount: paymentAmount,
  })

  // 🆂 Stripe create checkout session
  const { sessionId, paymentUrl } = await StripeService.createCheckoutSession(
    createdOrder.orderId,
    productId
  )

  // 🗄️ Update Order with stripe session info
  await createdOrder.merge({ sessionId, paymentUrl }).save()

  response.created({ paymentUrl })
}
