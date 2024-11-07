// [r: Admin]

import { HttpRouterService } from '@adonisjs/core/types'
import { HttpContext } from '@adonisjs/core/http'
const AdminAuthController = () => import('#controllers/roles/admin/auth/admin_auth_controller')
import { middleware } from '#start/kernel'

/**
 * [ Admin ]
 * Auth routes | Base path '/api/v1/admin/auth'
 */
export default function authRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // [POST] Login
      router.post('/login', [AdminAuthController, 'login'])

      // [POST] Logout
      router.post('/logout', [AdminAuthController, 'logout']).use(middleware.adminAuth())

      /**
       * Password forgot & reset
       */
      // [POST] Password forgot
      router.post('/password-forgot', [AdminAuthController, 'passwordForgot'])

      // [POST] Password reset
      router.post('/password-reset', [AdminAuthController, 'passwordReset'])

      // [PUT] Password change
      router
        .put('/password-change', [AdminAuthController, 'passwordChange'])
        .use(middleware.adminAuth())

      //*---------------------------▼-----🚦 Check permission-----▼---------------------------
      router
        .get('/check-permission', ({ response }: HttpContext) => {
          return response.ok({ message: 'Approved!' })
        })
        .use(middleware.adminAuth())
      //*---------------------------▲-----🚦 Check permission-----▲---------------------------
    })
    .prefix('/auth')
}
