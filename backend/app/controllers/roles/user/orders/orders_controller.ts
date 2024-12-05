// [r: User]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ User ]
 * Order controller
 */
export default class OrdersController {
  // index
  async index(context: HttpContext) {
    const { index } = await import('#controllers/roles/user/orders/index')
    return index(context)
  }

  // async create({}: HttpContext) {}

  // store
  async store(context: HttpContext) {
    const { store } = await import('#controllers/roles/user/orders/store')
    return store(context)
  }

  // show
  async show(context: HttpContext) {
    const { show } = await import('#controllers/roles/user/orders/show')
    return show(context)
  }

  // async edit({ params }: HttpContext) {}

  // async update({ params, request }: HttpContext) {}

  // async destroy({ params }: HttpContext) {}
}
