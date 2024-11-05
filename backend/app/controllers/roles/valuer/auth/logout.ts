import { HttpContext } from '@adonisjs/core/http'
import Valuer from '#models/valuer'
import env from '#start/env'
import i18n from '#services/i18n_service'

export async function logout({ auth, response }: HttpContext) {
  // 🔑 Get the access token identifier
  const accessTokenIdentifier = auth.user!.currentAccessToken?.identifier

  // 🔑 Revoke the access token
  if (accessTokenIdentifier) {
    await Valuer.accessTokens.delete(auth.user!, accessTokenIdentifier)
  }

  return response // 🍪 Clear cookies
    .clearCookie(env.get('REFRESH_TOKEN_NAME'))
    .clearCookie(env.get('ACCESS_TOKEN_NAME'))
    .ok({ message: i18n.t('messages.valuer.auth.logout.ok') })
}
