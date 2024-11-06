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
      //*---------------------------▼-----REGISTER-----▼---------------------------
      // [POST] Register <page-1> Send email [🚧 Built-in limiter]
      router.post('/register-email-verify-send', [ValuerAuthController, 'registerEmailVerifySend'])

      // [POST] Register <page-1> Verify email
      router.post('/register-email-verify', [ValuerAuthController, 'registerEmailVerify'])

      // [POST] Register <page-2> Send sms [🚧 Built-in limiter]
      router.post('/register-phone-verify-send', [ValuerAuthController, 'registerPhoneVerifySend'])

      // [POST] Register <page-2>
      router.post('/register', [ValuerAuthController, 'register'])

      // [POST] Register <page-3>
      router.post('/register-qualify', [ValuerAuthController, 'registerQualify'])
      //*---------------------------▲-----REGISTER-----▲---------------------------

      // [POST] Login
      router.post('/login', [ValuerAuthController, 'login'])

      // [POST] Logout
      router.post('/logout', [ValuerAuthController, 'logout']).use(middleware.valuerAuth())

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
