import { HttpRouterService } from '@adonisjs/core/types'
const UserProfileController = () =>
  import('#controllers/roles/user/profile/user_profile_controller')
import { middleware } from '#start/kernel'

/**
 * User profile routes '/api/v1/user/profile'
 */
export default function userProfileRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.put('/username', [UserProfileController, 'usernameChange'])
      router.put('/password', [UserProfileController, 'passwordChange'])

      // Phone Verify
      router.post('/phone-verify-send', [UserProfileController, 'phoneVerifySend'])
      router.post('/phone-verify', [UserProfileController, 'phoneVerify'])
    })
    .prefix('/profile')
    .use(middleware.userAuth())
}
