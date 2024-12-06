// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
import { middleware } from '#start/kernel'
const ValuerProfileController = () =>
  import('#controllers/roles/valuer/profile/valuer_profile_controller')

/**
 * [ Valuer ]
 * Profile routes | Base path '/api/v1/valuer/profile'
 */
export default function profileRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [PATCH] Username update
      router.patch('/username', [ValuerProfileController, 'usernameChange'])

      // [PATCH] Password update
      router.patch('/password', [ValuerProfileController, 'passwordChange'])

      // [POST] Phone verification: send sms
      router.post('/phone-verify-send', [ValuerProfileController, 'phoneVerifySend'])

      // [POST] Phone verification: verify and update
      router.post('/phone-verify', [ValuerProfileController, 'phoneVerify'])
    })
    .prefix('/profile')
    .use(middleware.valuerAuth()) // Allow only authenticated valuers
}
