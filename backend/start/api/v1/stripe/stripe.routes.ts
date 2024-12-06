import { middleware } from '#start/kernel'
import { HttpRouterService } from '@adonisjs/core/types'
const FileProxyController = () => import('#controllers/file_proxy_controller')

/**
 * [ 🆂 Stripe ]
 * All routes | Base path '/api/v1/stripe'
 */
export default function stripeRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.get('/*', [FileProxyController, 'get']).use(middleware.userAuth())
    })
    .prefix('stripe')
}
