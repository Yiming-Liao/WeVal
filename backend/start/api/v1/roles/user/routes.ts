import { HttpRouterService } from '@adonisjs/core/types'
import userAuthRoutes from './auth/user_auth_routes.js'
import userProfileRoutes from './profile/user_auth_routes.js'
import userRoutes from './user_routes.js'

/**
 * User all routes '/api/v1/user'
 */
export default function userAllRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // user auth '/api/v1/user/auth'
      userAuthRoutes(router)

      // user profile '/api/v1/user/profile'
      userProfileRoutes(router)

      // user 操作路由 '/api/v1/user/'
      userRoutes(router)
    })
    .prefix('user')
}
