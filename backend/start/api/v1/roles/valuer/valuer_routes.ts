// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
import authRoutes from './auth/auth_routes.js'
import profileRoutes from './profile/profile_routes.js'
const QualificationRejectionsController = () =>
  import('#controllers/roles/valuer/qualificationRejection/qualification_rejections_controller')
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

      // 🧾 ValuerRejectionReason <Resource> routes | Prefix: '/api/v1/valuer-rejection-reasons'
      router
        .resource('/qualification-rejections/:email', QualificationRejectionsController)
        .except(['create', 'edit', 'show', 'destroy'])
    })
    .prefix('valuer')
}
