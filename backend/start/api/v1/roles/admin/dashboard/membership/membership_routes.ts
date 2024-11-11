// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import membershipValuerRoutes from './valuer/membership_valuer_routes.js'

/**
 * [ Admin ]
 * Membership routes | Base path '/api/v1/admin/mambership'
 */
export default function membershipRoutes(router: HttpRouterService) {
  router
    .group(() => {
      membershipValuerRoutes(router)
    })
    .prefix('/membership')
}
