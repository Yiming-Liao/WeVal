// [r: User]

import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user/user'
import env from '#start/env'
import i18n from '#services/i18n_service'

export async function logout({ auth, response }: HttpContext) {
  // 🔑 Get the access token identifier
  const accessTokenIdentifier = auth.user!.currentAccessToken?.identifier

  // 🔑 Revoke the access token
  if (accessTokenIdentifier) {
    await User.accessTokens.delete(auth.user! as User, accessTokenIdentifier)
  }

  return response // 🍪 Clear cookies
    .clearCookie(env.get('USER_REFRESH_TOKEN_NAME'))
    .clearCookie(env.get('USER_ACCESS_TOKEN_NAME'))
    .clearCookie(env.get('USER_ROLE_NAME'))
    .ok({ message: i18n.t('messages.user.auth.logout.ok') })
}
