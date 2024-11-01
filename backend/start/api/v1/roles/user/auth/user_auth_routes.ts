import { HttpRouterService } from '@adonisjs/core/types'
const UserAuthController = () => import('#controllers/roles/user/auth/user_auth_controller')
import { middleware } from '#start/kernel'
import { throttle } from '#start/limiter'

/**
 * User auth routes '/api/v1/user/auth'
 */
export default function userAuthRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [POST] 註冊 <form> (註冊第二頁)
      router.post('/register', [UserAuthController, 'register'])

      // [POST] 登入 <form>
      router.post('/login', [UserAuthController, 'login'])

      // [POST] 登出
      router.post('/logout', [UserAuthController, 'logout']).use(middleware.userAuth())

      /**
       * Email
       */
      // [POST] 寄送驗證碼 <form> (註冊第一頁)
      router.post('/register-email-verify-send', [UserAuthController, 'registerEmailVerifySend'])

      // [POST] 驗證信箱 <form> (註冊第一頁)
      router.post('/register-email-verify', [UserAuthController, 'registerEmailVerify'])

      /**
       * Password
       */

      // [POST] 忘記密碼  <form>
      router.post('/password-forgot', [UserAuthController, 'passwordForgot'])

      // [POST] 重設密碼  <form>
      router.post('/password-reset', [UserAuthController, 'passwordReset'])
    })
    .prefix('/auth')
    .use(throttle)
}
