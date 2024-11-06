import type { HttpContext } from '@adonisjs/core/http'
import registerValidator from '#validators/roles/user/auth/register_validator'
import User from '#models/user'
import env from '#start/env'
import { AuthService } from '#services/roles/user/auth_service'
import i18n from '#services/i18n_service'

export async function register({ request, response }: HttpContext) {
  // 📝 Validator (Built-in error handling)
  const { email, username, password } = await request.validateUsing(registerValidator)

  // 🗄️ Find User
  const foundUser = await User.findBy('email', email)

  // 🗄️ Update User
  const updatedUser = await foundUser!.merge({ email, username, password }).save()

  // 🔑 Generate access token
  const accessToken = await User.accessTokens.create(updatedUser, ['*'])

  // 🔑 Generate refresh token
  const refreshToken = await AuthService.generateRefreshToken(updatedUser)

  return response // Refresh Token expires in 30 days
    .cookie(env.get('USER_REFRESH_TOKEN_NAME'), refreshToken, { maxAge: 30 * 24 * 60 * 60 })
    .cookie(env.get('USER_ACCESS_TOKEN_NAME'), accessToken.toJSON().token)
    .created({
      message: i18n.t('messages.user.auth.register.created'),
      user: updatedUser.serialize(),
    })
}
