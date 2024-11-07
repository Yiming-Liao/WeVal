// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth_routes.js'
import dashboardRoutes from './dashboard/dashboard_routes.js'

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
    })
    .prefix('admin')
}
