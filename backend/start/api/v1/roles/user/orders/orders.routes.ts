// [r: User]

import { HttpRouterService } from '@adonisjs/core/types'
const UserOrdersController = () => import('#controllers/roles/user/orders/orders_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Order routes | Base path '/api/v1/user/orders'
 */
export default function ordersRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.resource('orders', UserOrdersController)
      router.get('orders/counts', UserOrdersController)
    })
    .use(middleware.userAuth()) // Allow only authenticated users
}
