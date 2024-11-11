// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import Admin from '#models/admin'
import { DateTime } from 'luxon'
import env from '#start/env'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { AuthService } from './auth_service.js'

export class AuthMiddlewareService {
  /**
   * 🔑 Check if refresh token valid and return foundAdmin
   */
  static async checkRefreshToken({ request, response }: HttpContext): Promise<Admin | void> {
    const refreshToken = request.cookie(env.get('ADMIN_REFRESH_TOKEN_NAME'))

    // ⛔ Refresh Token not exists: Return unauthorized error
    if (!refreshToken) {
      return response.unauthorized({
        errors: [{ message: 'No access token or refresh token found' }],
      })
    }

    // 🔍 Refresh Token exists -> Find admin
    const foundAdmin = await Admin.query().where('refreshToken', refreshToken).first()

    // ⛔ Refresh Token invalid: Return unauthorized error
    if (!foundAdmin || (foundAdmin?.refreshTokenExpiresAt || 0) < DateTime.now()) {
      return response.unauthorized({ errors: [{ message: 'Invalid or expired refresh token' }] })
    }

    // Return admin found by the refreshToken
    return foundAdmin
  }

  /**
   * 🔑 Refresh access token and return
   */
  static async refreshAccessToken(ctx: HttpContext, admin: Admin): Promise<string> {
    // 🔑 Generate new access token
    const newAccessToken = await Admin.accessTokens.create(admin!, ['*'])

    // 🍪 Set newAccessToken to response cookie
    ctx.response.cookie(env.get('ADMIN_ACCESS_TOKEN_NAME'), newAccessToken.toJSON().token)

    // Return new access token
    return newAccessToken.toJSON().token!
  }

  /**
   * 🔑 [Adonis built-in] Access token OAT authentication
   */
  static async authenticateAccessToken(
    ctx: HttpContext,
    accessToken: string
  ): Promise<AuthenticatedAdmin> {
    const { request, auth } = ctx

    // Set access token to request headers for further authentication
    request.headers().authorization = `Bearer ${accessToken}`

    // 🔐 Authenticate access token, and get authenticatedAdmin (Admin)
    await auth.authenticateUsing(['admin']) // guard => 'admin'
    const authenticatedAdmin = auth.user! as AuthenticatedAdmin

    // Return new access token
    return authenticatedAdmin
  }

  /**
   * 🏷 Refresh Admin UUID
   */
  static async refreshUuid(ctx: HttpContext, admin: Admin): Promise<void> {
    // 🏷 Generate UUID
    const uuid = await AuthService.generateUuid(admin!)

    ctx.response.plainCookie(env.get('ADMIN_UUID_NAME'), uuid)
  }
}

// authenticateAccessToken types
interface AuthenticatedAdmin extends Admin {
  currentAccessToken: AccessToken
}
