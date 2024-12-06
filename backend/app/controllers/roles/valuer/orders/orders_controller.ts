// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ Valuer ]
 * Order controller
 */
export default class OrdersController {
  // newRequests
  async newRequests(context: HttpContext) {
    const { newRequests } = await import('#controllers/roles/valuer/orders/new_requests')
    return newRequests(context)
  }

  // index
  async index(context: HttpContext) {
    const { index } = await import('#controllers/roles/valuer/orders/index')
    return index(context)
  }

  // show
  async show(context: HttpContext) {
    const { show } = await import('#controllers/roles/valuer/orders/show')
    return show(context)
  }
}
