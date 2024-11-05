// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
const ValuerAuthController = () => import('#controllers/roles/valuer/auth/valuer_auth_controller')
import { middleware } from '#start/kernel'

/**
 * [ Valuer ]
 * Auth routes | Base path '/api/v1/valuer/auth'
 */
export default function authRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [POST] Register (Register: second page)
      router.post('/register', [ValuerAuthController, 'register'])

      // [POST] Login
      router.post('/login', [ValuerAuthController, 'login'])

      // [POST] Logout
      router.post('/logout', [ValuerAuthController, 'logout']).use(middleware.valuerAuth())

      /**
       * Email
       */
      // [POST] Email verification: send email (Register: first page) [🚧 Built-in limiter]
      router.post('/register-email-verify-send', [ValuerAuthController, 'registerEmailVerifySend'])

      // [POST] Email verification: verify and update (Register: first page)
      router.post('/register-email-verify', [ValuerAuthController, 'registerEmailVerify'])

      /**
       * Phone
       */
      // [POST] Phone verification: send sms (Register: second page) [🚧 Built-in limiter]
      router.post('/register-phone-verify-send', [ValuerAuthController, 'registerPhoneVerifySend'])

      /**
       * Password
       */
      // [POST] Password forgot
      router.post('/password-forgot', [ValuerAuthController, 'passwordForgot'])

      // [POST] Password reset
      router.post('/password-reset', [ValuerAuthController, 'passwordReset'])
    })
    .prefix('/auth')
}
