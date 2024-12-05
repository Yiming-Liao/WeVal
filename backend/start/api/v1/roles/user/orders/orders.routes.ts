import { HttpRouterService } from '@adonisjs/core/types'
const UserorderController = () => import('#controllers/roles/user/orders/orders_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Order routes | Base path '/api/v1/user/order'
 */
export default function ordersRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.resource('orders', UserorderController)
    })
    .use(middleware.userAuth()) // Allow only authenticated users
}
