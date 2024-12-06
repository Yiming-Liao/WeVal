import { middleware } from '#start/kernel'
import { HttpRouterService } from '@adonisjs/core/types'
const FileProxyController = () => import('#controllers/file_proxy_controller')

/**
 * [ 🪣 File proxy ]
 * All routes | Base path '/api/v1/files'
 */
export default function fileProxyRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🙍🏻‍♂️ User | Prefix: '/api/v1/files/user'
      router
        .group(() => {
          router.get('/*', [FileProxyController, 'get']).use(middleware.userAuth())
          router.delete('/*', [FileProxyController, 'delete']).use(middleware.userAuth())
        })
        .prefix('user')

      // 👨🏻‍💼 Valuer | Prefix: '/api/v1/files/valuer'
      router
        .group(() => {
          router.get('/*', [FileProxyController, 'get']).use(middleware.valuerAuth())
          router.delete('/*', [FileProxyController, 'delete']).use(middleware.valuerAuth())
        })
        .prefix('valuer')

      // 👮🏻‍♂️ Admin | Prefix: '/api/v1/files/admin'
      router
        .group(() => {
          router.get('/*', [FileProxyController, 'get']).use(middleware.adminAuth())
          router.delete('/*', [FileProxyController, 'delete']).use(middleware.adminAuth())
        })
        .prefix('admin')
    })
    .prefix('files')
}
