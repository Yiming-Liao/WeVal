// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
const MembershipValuersController = () =>
  import('#controllers/roles/admin/dashboard/membership/valuers/membership_valuers_controller')

/**
 * [ Admin ]
 * Membership valuers routes | Base path '/api/v1/admin/mambership/valuers'
 */
export default function membershipValuerRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [GET] Index | List out all valuers
      router.get('/', [MembershipValuersController, 'index'])

      // [GET] Show | Show a valuer
      router.get('/:email', [MembershipValuersController, 'show'])

      // [PATCH] Approve | Approve a valuer
      router.patch('/:email/approve', [MembershipValuersController, 'approve'])

      // [PATCH] Reject | reject a valuer
      router.patch('/:email/reject', [MembershipValuersController, 'reject'])
    })
    .prefix('/valuers')
}
