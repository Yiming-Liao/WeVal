import { HttpRouterService } from '@adonisjs/core/types'
const UserProfileController = () =>
  import('#controllers/roles/user/profile/user_profile_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Profile routes | Base path '/api/v1/user/profile'
 */
export default function profileRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [PATCH] Username update
      router.patch('/username', [UserProfileController, 'usernameChange'])

      // [PATCH] Password update
      router.patch('/password', [UserProfileController, 'passwordChange'])

      // // [POST] Phone verification: send sms [🚧 Built-in limiter]
      // router.post('/phone-verify-send', [UserProfileController, 'phoneVerifySend'])

      // // [POST] Phone verification: verify and update
      // router.post('/phone-verify', [UserProfileController, 'phoneVerify'])
    })
    .prefix('/profile')
    .use(middleware.userAuth()) // Allow only authenticated users
}
