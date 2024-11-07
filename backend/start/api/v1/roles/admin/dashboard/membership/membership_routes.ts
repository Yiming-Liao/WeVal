// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
const AdminMembershipController = () =>
  import('#controllers/roles/admin/dashboard/membership/admin_membership_controller')

/**
 * [ Admin ]
 * Auth routes | Base path '/api/v1/admin/auth'
 */
export default function membershipRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [GET] Index
      router.get('/index', [AdminMembershipController, 'index'])
    })
    .prefix('/membership')
}
