/*
|--------------------------------------------------------------------------
| Define HTTP limiters
|--------------------------------------------------------------------------
|
| The "limiter.define" method creates an HTTP middleware to apply rate
| limits on a route or a group of routes. Feel free to define as many
| throttle middleware as needed.
|
*/

import limiter from '@adonisjs/limiter/services/main'

// // Allows only 10 request per minute
// export const throttle = limiter.define('global', () => {
//   return limiter.allowRequests(10).every('1 minute')
// })

// [1 time 1 minute] Allows only one request per minute
export const throttle1t1m = limiter.define('throttle1t1m', () => {
  return limiter.allowRequests(1).every('1 minute')
})

// [1 time 10 second] Allows only one request per 10 seconds
export const throttle1t10s = limiter.define('throttle1t10s', () => {
  return limiter.allowRequests(1).every('10 second')
})

// [10 time 1 minute] Allows only one request per minute
export const throttle10t1m = limiter.define('throttle10t1m', () => {
  return limiter.allowRequests(10).every('1 minute')
})

// [10 time 1 minute] Allows only one request per minute
export const throttle3t10s = limiter.define('throttle3t10s', () => {
  return limiter.allowRequests(3).every('10 second')
})
