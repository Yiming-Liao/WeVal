import router from '@adonisjs/core/services/router'
import { DateTime } from 'luxon'
import env from './env.js'
import { middleware } from './kernel.js'
import apiV1Routes from './api/v1/api_v1_routes.js'
import User from '#models/user'

// 🔎 Health check
router.get('/', () => {
  return {
    status: 'OK',
    timestamp: DateTime.now().setZone('Asia/Taipei'),
    apiVersion: 'v1',
    environment: process.env.NODE_ENV || 'development',
    messages: `You are currently at '${env.get('BACKEND_URL')}'`,
  }
})

// 🔎 Testing: checking tokens
router
  .get('/tokens', async ({ auth }) => {
    return User.accessTokens.all(auth.user!)
  })
  .use(middleware.userAuth())

// 📍 API v1 routes | Prefix: '/api/v1'
router
  .group(() => {
    apiV1Routes(router)
  })
  .use(middleware.apiRateLimit()) // Allow 60 times in 1 minute for all API calls
