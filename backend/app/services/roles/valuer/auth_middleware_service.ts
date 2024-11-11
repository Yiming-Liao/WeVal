// [r: Valuer]

import type { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer'
import { DateTime } from 'luxon'
import env from '#start/env'
import { AccessToken } from '@adonisjs/auth/access_tokens'

export class AuthMiddlewareService {
  /**
   * 🔑 Check if refresh token valid and return foundValuer
   */
  static async checkRefreshToken({ request, response }: HttpContext): Promise<Valuer | void> {
    const refreshToken = request.cookie(env.get('VALUER_REFRESH_TOKEN_NAME'))

    // ⛔ Refresh Token not exists: Return unauthorized error
    if (!refreshToken) {
      return response.unauthorized({
        errors: [{ message: 'No access token or refresh token found' }],
      })
    }

    // 🔍 Refresh Token exists -> Find valuer
    const foundValuer = await Valuer.query().where('refreshToken', refreshToken).first()

    // ⛔ Refresh Token invalid: Return unauthorized error
    if (!foundValuer || (foundValuer?.refreshTokenExpiresAt || 0) < DateTime.now()) {
      return response.unauthorized({ errors: [{ message: 'Invalid or expired refresh token' }] })
    }

    // Return valuer found by the refreshToken
    return foundValuer
  }

  /**
   * 🔑 Refresh access token and return
   */
  static async refreshAccessToken(ctx: HttpContext, foundValuer: Valuer): Promise<string> {
    // 🔑 Generate new access token
    const newAccessToken = await Valuer.accessTokens.create(foundValuer!, ['*'])

    // 🍪 Set newAccessToken to response cookie
    ctx.response.cookie(env.get('VALUER_ACCESS_TOKEN_NAME'), newAccessToken.toJSON().token)

    // Return new access token
    return newAccessToken.toJSON().token!
  }

  /**
   * 🔑 [Adonis built-in] Access token OAT authentication
   */
  static async authenticateAccessToken(
    ctx: HttpContext,
    accessToken: string
  ): Promise<AuthenticatedValuer> {
    const { request, auth } = ctx

    // Set access token to request headers for further authentication
    request.headers().authorization = `Bearer ${accessToken}`

    // 🔐 Authenticate access token, and get authenticatedValuer (Valuer)
    await auth.authenticateUsing(['valuer']) // guard => 'valuer'
    const authenticatedValuer = auth.user! as AuthenticatedValuer

    // Return new access token
    return authenticatedValuer
  }
}

interface AuthenticatedValuer extends Valuer {
  currentAccessToken: AccessToken
}
