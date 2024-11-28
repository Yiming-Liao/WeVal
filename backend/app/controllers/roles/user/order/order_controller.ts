// [r: User]

import type { HttpContext } from '@adonisjs/core/http'

/**
 * [ User ]
 * Order controller
 */
export default class OrderController {
  // index
  async index(context: HttpContext) {
    const { index } = await import('#controllers/roles/user/order/index')
    return index(context)
  }

  // async create({}: HttpContext) {}

  // store
  async store(context: HttpContext) {
    const { store } = await import('#controllers/roles/user/order/store')
    return store(context)
  }

  // show
  async show(context: HttpContext) {
    const { show } = await import('#controllers/roles/user/order/show')
    return show(context)
  }

  // async edit({ params }: HttpContext) {}

  // async update({ params, request }: HttpContext) {}

  // async destroy({ params }: HttpContext) {}
}
