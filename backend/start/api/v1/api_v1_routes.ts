import { HttpRouterService } from '@adonisjs/core/types'
import { DateTime } from 'luxon'
import env from '#start/env'
import userRoutes from './roles/user/user_routes.js'
import valuerAllRoutes from './roles/valuer/valuer_routes.js'
// import postRoutes from './posts/routes.js'

/**
 * [ API routes entry point ]
 * API v1 routes | Base path '/api/v1'
 */
export default function apiV1Routes(router: HttpRouterService) {
  router
    .group(() => {
      // 🔎 Health check
      router.get('/', () => {
        return {
          status: 'OK',
          timestamp: DateTime.now().setZone('Asia/Taipei'),
          apiVersion: 'v1',
          environment: process.env.NODE_ENV || 'development',
          messages: `You are currently at '${env.get('BACKEND_URL')}/api/v1'`,
        }
      })

      // 🙍🏻‍♂️ User routes | Prefix: '/api/v1/user'
      router.group(() => {
        userRoutes(router)
      })

      // 👨🏻‍💼 Valuer routes | Prefix: '/api/v1/valuer'
      router.group(() => {
        valuerAllRoutes(router)
      })

      // // Post | 'posts'
      // router.group(() => {
      //   postRoutes(router)
      // })
    })
    .prefix('/api/v1')
}
