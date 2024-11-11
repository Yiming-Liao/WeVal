// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
const MembershipValuerController = () =>
  import('#controllers/roles/admin/dashboard/membership/valuer/membership_valuer_controller')

/**
 * [ Admin ]
 * Auth routes | Base path '/api/v1/admin/auth'
 */
export default function membershipValuerRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [GET] Index
      router.get('/index', [MembershipValuerController, 'index'])

      // [GET] Show
      router.get('/show/:email', [MembershipValuerController, 'show'])
    })
    .prefix('/valuer')
}
