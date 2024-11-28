// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import membershipValuersRoutes from './valuers/membership_valuers.routes.js'

/**
 * [ Admin ]
 * Membership routes | Base path '/api/v1/admin/mambership'
 */
export default function membershipRoutes(router: HttpRouterService) {
  router
    .group(() => {
      membershipValuersRoutes(router)
    })
    .prefix('/membership')
}
