import { HttpRouterService } from '@adonisjs/core/types'
import userRoutes from './roles/user/user.routes.js'
import valuerRoutes from './roles/valuer/valuer.routes.js'
import adminRoutes from './roles/admin/admin.routes.js'
import fileProxyRoutes from './fileProxy/file_proxy.routes.js'
// import stripeRoutes from './stripe/stripe.routes.js'

/**
 * [ API routes entry point ]
 * API v1 routes | Base path '/api/v1'
 */
export default function apiV1Routes(router: HttpRouterService) {
  router
    .group(() => {
      // 🙍🏻‍♂️ User routes | Prefix: '/api/v1/user'
      router.group(() => {
        userRoutes(router)
      })

      // 👨🏻‍💼 Valuer routes | Prefix: '/api/v1/valuer'
      router.group(() => {
        valuerRoutes(router)
      })

      // 👮🏻‍♂️ Admin routes | Prefix: '/api/v1/admin'
      router.group(() => {
        adminRoutes(router)
      })

      // 🪣 File proxy routes | Prefix: '/api/v1/files'
      router.group(() => {
        fileProxyRoutes(router)
      })

      // // 🆂 Stripe routes | Prefix: '/api/v1/stripe'
      // stripeRoutes(router)
    })
    .prefix('/api/v1')
}
