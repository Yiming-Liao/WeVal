import { HttpRouterService } from '@adonisjs/core/types'
const UserAuthController = () => import('#controllers/roles/user/auth/user_auth_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Auth routes | Base path '/api/v1/user/auth'
 */
export default function authRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [POST] Register (Register: second page)
      router.post('/register', [UserAuthController, 'register'])

      // [POST] Login
      router.post('/login', [UserAuthController, 'login'])

      // [POST] Logout
      router.post('/logout', [UserAuthController, 'logout']).use(middleware.userAuth())

      /**
       * Email
       */
      // [POST] Email verification: send email (Register: first page) [🚧 Built-in limiter]
      router.post('/register-email-verify-send', [UserAuthController, 'registerEmailVerifySend'])

      // [POST] Email verification: verify and update (Register: first page)
      router.post('/register-email-verify', [UserAuthController, 'registerEmailVerify'])

      /**
       * Password
       */
      // [POST] Password forgot
      router.post('/password-forgot', [UserAuthController, 'passwordForgot'])

      // [POST] Password reset
      router.post('/password-reset', [UserAuthController, 'passwordReset'])
    })
    .prefix('/auth')
}
