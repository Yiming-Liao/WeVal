// [r: User]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth.routes.js'
import profileRoutes from './profile/profile.routes.js'
import ordersRoutes from './orders/orders.routes.js'

/**
 * [ User ]
 * All routes | Base path '/api/v1/user'
 */
export default function userRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🛡️ User auth routes | Prefix: '/api/v1/user/auth'
      authRoutes(router)

      // 📋 User profile routes | Prefix: '/api/v1/user/profile'
      profileRoutes(router)

      // Order
      ordersRoutes(router)
    })
    .prefix('user')
}
