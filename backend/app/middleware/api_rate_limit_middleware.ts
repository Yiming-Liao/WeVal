import { HttpContext } from '@adonisjs/core/http'
import limiter from '@adonisjs/limiter/services/main'
import { NextFn } from '@adonisjs/core/types/http'

// Initialize customLimiter using Redis.
const customLimiter = limiter.use('redis', {
  requests: 100,
  duration: '1 minute',
})

/**
 * [ API routes ]
 * Limiter | Check if API requests is within the rate limit
 */
export default class ApiRateLimitMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { request, response } = ctx

    // Unique key based on IP
    const key = `<all>apiLimit:${request.ip()}`

    // Consume 1 request for a given key
    const executed = await customLimiter.attempt(key, () => true)

    // Limited
    if (!executed) {
      response.tooManyRequests({
        errors: [
          {
            message: `Too many requests. Try again after ${await customLimiter.availableIn(key)} seconds.`,
          },
        ],
      })
      return
    }

    // Not Limited
    await next()
  }
}
