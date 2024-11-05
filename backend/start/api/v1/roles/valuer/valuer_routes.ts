// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth_routes.js'
import profileRoutes from './profile/profile_routes.js'

/**
 * [ Valuer ]
 * All routes | Base path '/api/v1/valuer'
 */
export default function valuerRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🛡️ Valuer auth routes | Prefix: '/api/v1/valuer/auth'
      authRoutes(router)

      // 📋 Valuer profile routes | Prefix: '/api/v1/valuer/profile'
      profileRoutes(router)
    })
    .prefix('valuer')
}
