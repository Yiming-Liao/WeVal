// [r: Admin]

import Admin from '#models/admin/admin'
import { AuthMiddlewareService } from '#services/roles/admin/auth_middleware_service'
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { DateTime } from 'luxon'

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    let accessToken = ctx.request.cookie(env.get('ADMIN_ACCESS_TOKEN_NAME'))

    // Access Token not exists
    if (!accessToken) {
      // 🔑 Check if refresh token valid and return foundAdmin
      const foundAdmin = await AuthMiddlewareService.checkRefreshToken(ctx)

      // 🔑 Refresh access token and return
      accessToken = await AuthMiddlewareService.refreshAccessToken(ctx, foundAdmin!)
    }

    //*----------▼----- [Adonis built-in] Access token OAT authentication -----▼----------
    const authenticatedAdmin = await AuthMiddlewareService.authenticateAccessToken(ctx, accessToken)
    //*----------▲----- [Adonis built-in] Access token OAT authentication -----▲----------

    // Check if access token will expire in 10 minutes
    if (
      DateTime.fromJSDate(authenticatedAdmin.currentAccessToken.expiresAt!).diffNow('minutes')
        .minutes <= 10
    ) {
      // Revoke old accessToken
      await Admin.accessTokens.delete(
        authenticatedAdmin as Admin,
        authenticatedAdmin.currentAccessToken.identifier
      )

      // 🔑 Refresh access token and return
      await AuthMiddlewareService.refreshAccessToken(ctx, authenticatedAdmin as Admin)
    }

    return next()
  }
}
