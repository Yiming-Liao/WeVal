// [r: Valuer]

import { HttpRouterService } from '@adonisjs/core/types'
const ValuerOrdersController = () => import('#controllers/roles/valuer/orders/orders_controller')
import { middleware } from '#start/kernel'

/**
 * [ Valuer ]
 * Order routes | Base path '/api/v1/valuer/orders'
 */
export default function ordersRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.get('new-requests', [ValuerOrdersController, 'newRequests'])
      router.get(':id', [ValuerOrdersController, 'show'])
    })
    .prefix('orders')
    .use(middleware.valuerAuth()) // Allow only authenticated users
}
