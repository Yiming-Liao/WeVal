import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth_routes.js'
import profileRoutes from './profile/profile_routes.js'

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
    })
    .prefix('user')
}
