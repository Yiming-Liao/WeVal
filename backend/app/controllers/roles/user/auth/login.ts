// [r: User]

import type { HttpContext } from '@adonisjs/core/http'
import loginValidator from '#validators/roles/user/auth/login_validator'
import User from '#models/user/user'
import env from '#start/env'
import { AuthService } from '#services/roles/user/auth_service'
import i18n from '#services/i18n_service'

export async function login({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, password } = await request.validateUsing(loginValidator)

  // 🗄️ Find User (Built-in error handling)
  const foundUser = await User.verifyCredentials(email, password)

  // 🔑 Generate access token
  const accessToken = await User.accessTokens.create(foundUser!, ['*'])

  // 🔑 Generate refresh token
  const refreshToken = await AuthService.generateRefreshToken(foundUser!)

  return response // Refresh Token expires in 30 days (same wuth role name)
    .cookie(env.get('USER_REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('USER_ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .plainCookie(env.get('USER_ROLE_NAME'), 'user', { maxAge: 30 * 24 * 60 * 60, encode: false })
    .ok({
      message: i18n.t('messages.user.auth.login.ok'),
      user: foundUser!.serialize(),
    })
}
