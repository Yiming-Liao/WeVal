import { HttpRouterService } from '@adonisjs/core/types'
const FileProxyController = () => import('#controllers/file_proxy_controller')

/**
 * [ File proxy ]
 * All routes | Base path '/api/v1/files'
 */
export default function fileProxyRoutes(router: HttpRouterService) {
  router
    .group(() => {
      // 🪣 GET a file
      router.get('/*', [FileProxyController, 'get'])

      // 🪣 DELETE a file
      router.delete('/*', [FileProxyController, 'delete'])
    })
    .prefix('files')
}
