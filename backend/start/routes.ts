import router from '@adonisjs/core/services/router'
import { DateTime } from 'luxon'
import env from './env.js'
import { middleware } from './kernel.js'
import apiV1Routes from './api/v1/api_v1.routes.js'

router
  .group(() => {
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

    // 🚩 API v1 routes | Prefix: '/api/v1'
    router.group(() => {
      apiV1Routes(router)
    })
  })
  .use(middleware.apiRateLimit()) // Allow 100 times in 1 minute for all access
