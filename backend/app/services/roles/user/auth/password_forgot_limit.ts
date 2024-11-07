// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import limiter from '@adonisjs/limiter/services/main'

// Initialize customLimiter using Redis.
const customLimiter = limiter.use('redis', {
  requests: 1,
  duration: '30 seconds',
})

/**
 * [ User ]
 * Limiter | Check if the email sending request is within the rate limit
 */
export async function passwordForgotLimit(ctx: HttpContext) {
  const { request, response } = ctx

  // Unique key based on IP
  const key = `<user>passwordForgotLimit:${request.ip()}:${request.input('email')}`

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
    return false
  }

  // Not Limited
  return true
}
