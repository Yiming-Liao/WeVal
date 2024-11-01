import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import env from '#start/env'

export async function logout({ auth, response }: HttpContext) {
  // Get access token identifier
  const accessTokenIdentifier = auth.user!.currentAccessToken?.identifier

  // Revoke the access token
  if (accessTokenIdentifier) {
    await User.accessTokens.delete(auth.user!, accessTokenIdentifier)
  }

  return response // clear cookie
    .clearCookie(env.get('REFRESH_TOKEN_NAME'))
    .clearCookie(env.get('ACCESS_TOKEN_NAME'))
    .ok({ message: 'Successful logout' })
}
