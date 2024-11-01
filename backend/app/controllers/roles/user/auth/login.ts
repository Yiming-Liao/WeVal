import type { HttpContext } from '@adonisjs/core/http'
import loginValidator from '#validators/roles/user/auth/login_validator'
import User from '#models/user'
import env from '#start/env'
import { UserAuthService } from '#services/user_auth_service'

export async function login({ request, response }: HttpContext) {
  // Validate
  const { email, password } = await request.validateUsing(loginValidator)

  // Verify password
  const foundUser = await User.verifyCredentials(email, password)

  // Generate access token
  const accessToken = await User.accessTokens.create(foundUser!, ['*'])

  // Generate refresh token
  const refreshToken = await UserAuthService.generateRefreshToken(foundUser!)

  return response // Refresh Token expires -> 30 days
    .cookie(env.get('REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .ok({
      message: 'Successful login',
      user: foundUser!.serialize(),
    })
}
