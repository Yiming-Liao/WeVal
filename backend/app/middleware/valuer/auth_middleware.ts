// [r: Valuer]

import Valuer from '#models/valuer'
import { AuthMiddlewareService } from '#services/roles/valuer/auth_middleware_service'
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { DateTime } from 'luxon'

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    let accessToken = ctx.request.cookie(env.get('VALUER_ACCESS_TOKEN_NAME'))

    // Access Token not exists
    if (!accessToken) {
      // 🔑 Check if refresh token valid and return foundValuer
      const foundValuer = await AuthMiddlewareService.checkRefreshToken(ctx)

      // 🔑 Refresh access token and return
      accessToken = await AuthMiddlewareService.refreshAccessToken(ctx, foundValuer!)
    }

    //*----------▼----- [Adonis built-in] Access token OAT authentication -----▼----------
    const authenticatedValuer = await AuthMiddlewareService.authenticateAccessToken(
      ctx,
      accessToken
    )
    //*----------▲----- [Adonis built-in] Access token OAT authentication -----▲----------

    // Check if access token will expire in 10 minutes
    if (
      DateTime.fromJSDate(authenticatedValuer.currentAccessToken.expiresAt!).diffNow('minutes')
        .minutes <= 10
    ) {
      // Revoke old accessToken
      await Valuer.accessTokens.delete(
        authenticatedValuer as Valuer,
        authenticatedValuer.currentAccessToken.identifier
      )

      // 🔑 Refresh access token and return
      await AuthMiddlewareService.refreshAccessToken(ctx, authenticatedValuer as Valuer)
    }

    return next()
  }
}
