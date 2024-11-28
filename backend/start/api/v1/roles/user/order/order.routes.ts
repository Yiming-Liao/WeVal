import { HttpRouterService } from '@adonisjs/core/types'
const UserorderController = () => import('#controllers/roles/user/order/order_controller')
import { middleware } from '#start/kernel'

/**
 * [ User ]
 * Order routes | Base path '/api/v1/user/order'
 */
export default function orderRoutes(router: HttpRouterService) {
  router
    .group(() => {
      router.resource('orders', UserorderController)
    })
    .use(middleware.userAuth()) // Allow only authenticated users
}
