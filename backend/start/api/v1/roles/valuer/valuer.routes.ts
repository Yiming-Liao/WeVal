// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth.routes.js'
import profileRoutes from './profile/profile.routes.js'
import { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer/valuer'
import { middleware } from '#start/kernel'

/**
 * [ Valuer ]
 * All routes | Base path '/api/v1/valuer'
 */
export default function valuerRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🛡️ Valuer auth routes | Prefix: '/api/v1/valuer/auth'
      authRoutes(router)

      // 📋 Valuer profile routes | Prefix: '/api/v1/valuer/profile'
      profileRoutes(router)

      //*---------------------------▼-----🔎 Get Valuer Model-----▼---------------------------
      router
        .get('/', ({ response, auth }: HttpContext) => {
          return response.ok({ valuer: auth.user as Valuer })
        })
        .use(middleware.valuerAuth())
      //*---------------------------▲-----🔎 Get Valuer Model-----▲---------------------------
    })
    .prefix('valuer')
}
