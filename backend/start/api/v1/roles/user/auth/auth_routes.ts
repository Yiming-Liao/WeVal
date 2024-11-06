import { HttpRouterService } from '@adonisjs/core/types'
import { HttpContext } from '@adonisjs/core/http'
const UserAuthController = () => import('#controllers/roles/user/auth/user_auth_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Auth routes | Base path '/api/v1/user/auth'
 */
export default function authRoutes(router: HttpRouterService) {
  router
    .group(() => {
      //*---------------------------▼-----REGISTER-----▼---------------------------
      // [POST] Register <page-1> Send email [🚧 Built-in limiter]
      router.post('/register-email-verify-send', [UserAuthController, 'registerEmailVerifySend'])

      // [POST] Register <page-1> Verify email
      router.post('/register-email-verify', [UserAuthController, 'registerEmailVerify'])

      // [POST] Register <page-2> Send sms
      router.post('/register', [UserAuthController, 'register'])
      //*---------------------------▲-----REGISTER-----▲---------------------------

      // [POST] Login
      router.post('/login', [UserAuthController, 'login'])

      // [POST] Logout
      router.post('/logout', [UserAuthController, 'logout']).use(middleware.userAuth())

      /**
       * Password
       */
      // [POST] Password forgot
      router.post('/password-forgot', [UserAuthController, 'passwordForgot'])

      // [POST] Password reset
      router.post('/password-reset', [UserAuthController, 'passwordReset'])

      //*---------------------------▼-----🚦 Check permission-----▼---------------------------
      router
        .get('/check-permission', ({ response }: HttpContext) => {
          return response.ok({ message: 'Approved!' })
        })
        .use(middleware.userAuth())
      //*---------------------------▲-----🚦 Check permission-----▲---------------------------
    })
    .prefix('/auth')
}
