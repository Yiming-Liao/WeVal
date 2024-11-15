import type { HttpContext } from '@adonisjs/core/http'
import FileProxyService from '#services/file_proxy_service'

/**
 * File Proxy Controller
 * Referenced in: 'start/api/v1/fileProxy/file_proxy_routes.ts'
 */
export default class FileProxyController {
  // 🪣 GET a file
  public async get(ctx: HttpContext) {
    const { response, params } = ctx

    // ex. valuer/masouivan-gmail-com/certificate-cg5aj38xgg2dqzofyhwzdy8x.jpg
    const key = params['*'].join('/')

    try {
      const { file } = await FileProxyService.get({ key })
      response.stream(file)
    } catch (error) {
      console.error(error)
    }
  }

  // 🪣 DELETE a file
  public async delete(ctx: HttpContext) {
    const { params } = ctx

    // ex. valuer/masouivan-gmail-com/certificate-cg5aj38xgg2dqzofyhwzdy8x.jpg
    const key = params['*'].join('/')

    try {
      await FileProxyService.delete({ key })
    } catch (error) {
      console.error(error)
    }
  }
}
