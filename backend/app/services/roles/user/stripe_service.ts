// [r: User]

import { stripe } from '#config/stripe'
import env from '#start/env'

export class StripeService {
  /**
   * 🆂 Create checkout order
   */
  static async createCheckoutSession(orderId: string, productId: string) {
    // 1. Get product
    const product = await stripe.products.retrieve(productId)

    // 2. Get default price
    const price = await stripe.prices.retrieve(product.default_price as string)

    // 3. Create payment session
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: price.id, quantity: 1 }],
      mode: 'payment',
      success_url: `${env.get('FRONTEND_URL')}/user/dashboard/orders/${orderId}?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.get('FRONTEND_URL')}/user/dashboard/orders/${orderId}`,
    })

    return { sessionId: session.id, paymentUrl: session.url }
  }

  /**
   * 🆂 Check payment status of a checkout session
   */
  static async checkPaymentStatus(sessionId: string) {
    // Retrieve the session details
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    // Return the payment status
    return session.payment_status
  }
}
