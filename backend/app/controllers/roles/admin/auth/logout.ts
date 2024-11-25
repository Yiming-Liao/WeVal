// [r: Admin]

import { HttpContext } from '@adonisjs/core/http'
import Admin from '#models/admin/admin'
import env from '#start/env'
import i18n from '#services/i18n_service'

export async function logout({ auth, response }: HttpContext) {
  // 🔑 Get the access token identifier
  const accessTokenIdentifier = auth.user!.currentAccessToken?.identifier

  // 🔑 Revoke the access token
  if (accessTokenIdentifier) {
    await Admin.accessTokens.delete(auth.user! as Admin, accessTokenIdentifier)
  }

  return response // 🍪 Clear cookies
    .clearCookie(env.get('ADMIN_REFRESH_TOKEN_NAME'))
    .clearCookie(env.get('ADMIN_ACCESS_TOKEN_NAME'))
    .clearCookie(env.get('USER_ROLE_NAME'))
    .ok({ message: i18n.t('messages.admin.auth.logout.ok') })
}
