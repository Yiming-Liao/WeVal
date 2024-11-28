// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth.routes.js'
import dashboardRoutes from './dashboard/dashboard.routes.js'
import { HttpContext } from '@adonisjs/core/http'
import { stripe } from '#config/stripe'

/**
 * [ Admin ]
 * All routes | Base path '/api/v1/admin'
 */
export default function adminRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🛡️ Auth routes | Prefix: '/api/v1/admin/auth'
      authRoutes(router)

      // 🖥️ Dashboard routes | Prefix: '/api/v1/admin/' (No extra prefixes)
      dashboardRoutes(router)

      // Stripe test
      router.get('/stripe/products', async ({ response }: HttpContext) => {
        const products = await stripe.products.list()
        response.status(200).ok({ products })
      })
    })
    .prefix('admin')
}
