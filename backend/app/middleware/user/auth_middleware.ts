// [r: User]

import User from '#models/user/user'
import { AuthMiddlewareService } from '#services/roles/user/auth_middleware_service'
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { DateTime } from 'luxon'

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    let accessToken = ctx.request.cookie(env.get('USER_ACCESS_TOKEN_NAME'))

    // Access Token not exists
    if (!accessToken) {
      // 🔑 Check if refresh token valid and return foundUser
      const foundUser = await AuthMiddlewareService.checkRefreshToken(ctx)
      if (!foundUser) return

      // 🔑 Refresh access token and return
      accessToken = await AuthMiddlewareService.refreshAccessToken(ctx, foundUser!)
    }

    //*----------▼----- [Adonis built-in] Access token OAT authentication -----▼----------
    const authenticatedUser = await AuthMiddlewareService.authenticateAccessToken(ctx, accessToken)
    //*----------▲----- [Adonis built-in] Access token OAT authentication -----▲----------

    // Check if access token will expire in 10 minutes
    if (
      DateTime.fromJSDate(authenticatedUser.currentAccessToken.expiresAt!).diffNow('minutes')
        .minutes <= 10
    ) {
      // Revoke old accessToken
      await User.accessTokens.delete(
        authenticatedUser as User,
        authenticatedUser.currentAccessToken.identifier
      )

      // 🔑 Refresh access token and return
      await AuthMiddlewareService.refreshAccessToken(ctx, authenticatedUser as User)
    }

    return next()
  }
}
