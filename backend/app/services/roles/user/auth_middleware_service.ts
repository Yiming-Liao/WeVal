// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { DateTime } from 'luxon'
import env from '#start/env'
import { AccessToken } from '@adonisjs/auth/access_tokens'

export class AuthMiddlewareService {
  /**
   * 🔑 Check if refresh token valid and return foundUser
   */
  static async checkRefreshToken({ request, response }: HttpContext): Promise<User | void> {
    const refreshToken = request.cookie(env.get('USER_REFRESH_TOKEN_NAME'))

    // ⛔ Refresh Token not exists: Return unauthorized error
    if (!refreshToken) {
      return response.unauthorized({
        errors: [{ message: 'No access token or refresh token found' }],
      })
    }

    // 🔍 Refresh Token exists -> Find user
    const foundUser = await User.query().where('refreshToken', refreshToken).first()

    // ⛔ Refresh Token invalid: Return unauthorized error
    if (!foundUser || (foundUser?.refreshTokenExpiresAt || 0) < DateTime.now()) {
      return response.unauthorized({ errors: [{ message: 'Invalid or expired refresh token' }] })
    }

    // Return user found by the refreshToken
    return foundUser
  }

  /**
   * 🔑 Refresh access token and return
   */
  static async refreshAccessToken(ctx: HttpContext, foundUser: User): Promise<string> {
    // 🔑 Generate new access token
    const newAccessToken = await User.accessTokens.create(foundUser!, ['*'])

    // 🍪 Set newAccessToken to response cookie
    ctx.response.cookie(env.get('USER_ACCESS_TOKEN_NAME'), newAccessToken.toJSON().token)

    // Return new access token
    return newAccessToken.toJSON().token!
  }

  /**
   * 🔑 [Adonis built-in] Access token OAT authentication
   */
  static async authenticateAccessToken(
    ctx: HttpContext,
    accessToken: string
  ): Promise<AuthenticatedUser> {
    const { request, auth } = ctx

    // Set access token to request headers for further authentication
    request.headers().authorization = `Bearer ${accessToken}`

    // 🔐 Authenticate access token, and get authenticatedUser (User)
    await auth.authenticateUsing(['user']) // guard => 'user'
    const authenticatedUser = auth.user! as AuthenticatedUser

    // Return new access token
    return authenticatedUser
  }
}

interface AuthenticatedUser extends User {
  currentAccessToken: AccessToken
}
