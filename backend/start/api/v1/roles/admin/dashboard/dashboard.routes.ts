// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import membershipRoutes from './membership/membership.routes.js'
import { middleware } from '#start/kernel'

/**
 * [ Admin ]
 * Dashboard routes | Base path '/api/v1/admin/'
 */
export default function dashboardRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 👤 Membership routes | Prefix: '/api/v1/admin/membership'
      membershipRoutes(router)
    })
    .use(middleware.adminAuth()) // All dashboard actions are protected
}
