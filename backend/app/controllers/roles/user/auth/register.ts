import type { HttpContext } from '@adonisjs/core/http'
import registerValidator from '#validators/roles/user/auth/register_validator'
import User from '#models/user'
import env from '#start/env'
import { UserAuthService } from '#services/user_auth_service'

export async function register({ request, response }: HttpContext) {
  // Validate  // email exists
  const { email, username, password } = await request.validateUsing(registerValidator)

  // Find User
  const foundUser = await User.findBy('email', email)

  // Update User
  const updatedUser = await foundUser!.merge({ email, username, password }).save()

  // Generate access token
  const accessToken = await User.accessTokens.create(updatedUser, ['*'])

  // Generate refresh token
  const refreshToken = await UserAuthService.generateRefreshToken(updatedUser)

  return response // Refresh Token 設置為 30天
    .cookie(env.get('REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .created({
      message: 'Successful register',
      user: updatedUser.serialize(),
    })
}
