// [r: Admin]

import type { HttpContext } from '@adonisjs/core/http'
import loginValidator from '#validators/roles/admin/auth/login_validator'
import Admin from '#models/admin/admin'
import env from '#start/env'
import { AuthService } from '#services/roles/admin/auth_service'
import i18n from '#services/i18n_service'

export async function login({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, password } = await request.validateUsing(loginValidator)

  // 🗄️ Find Admin (Built-in error handling)
  const foundAdmin = await Admin.verifyCredentials(email, password)

  // 🔑 Generate access token
  const accessToken = await Admin.accessTokens.create(foundAdmin!, ['*'])

  // 🔑 Generate refresh token
  const refreshToken = await AuthService.generateRefreshToken(foundAdmin!)

  return response // Refresh Token expires in 30 days (same wuth role name)
    .cookie(env.get('ADMIN_REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('ADMIN_ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .plainCookie(env.get('USER_ROLE_NAME'), 'admin', { maxAge: 30 * 24 * 60 * 60, encode: false })
    .ok({
      message: i18n.t('messages.admin.auth.login.ok'),
      admin: foundAdmin!.serialize(),
    })
}
