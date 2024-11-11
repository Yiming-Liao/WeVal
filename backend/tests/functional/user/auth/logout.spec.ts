import User from '#models/user/user'
import env from '#start/env'
import { test } from '@japa/runner'

test.group('User auth logout', (group) => {
  let USER_LOGOUT_TEST: User

  group.setup(async () => {
    // 創建新的使用者
    USER_LOGOUT_TEST = await User.create({
      email: 'USER_LOGOUT_TEST@gmail.com',
      password: '123456',
      username: 'USER_LOGOUT_TEST',
    })
  })

  test('登入完成後 登出', async ({ client, assert }) => {
    // 先登入
    const loginResponse = await client
      .post('/user/auth/login')
      .form({ email: 'USER_LOGOUT_TEST@gmail.com', password: '123456' })

    loginResponse.assertCookie(env.get('USER_REFRESH_TOKEN_NAME')) // 獲得 Refresh Token
    loginResponse.assertCookie(env.get('USER_ACCESS_TOKEN_NAME')) // 獲得 Access Token

    const refreshToken = loginResponse.cookie(env.get('USER_REFRESH_TOKEN_NAME'))?.value
    const accessToken = loginResponse.cookie(env.get('USER_ACCESS_TOKEN_NAME'))?.value

    const logoutResponse = await client
      .post('/user/auth/logout')
      .withCookie(env.get('USER_REFRESH_TOKEN_NAME'), refreshToken)
      .withCookie(env.get('USER_ACCESS_TOKEN_NAME'), accessToken)

    logoutResponse.assertStatus(200)
    // logoutResponse.assertBody({ message: 'Successful logout' })

    // 檢查 Refresh Token 的 Cookie maxAge 是否為 -1
    const refreshCookie = logoutResponse.cookie(env.get('USER_REFRESH_TOKEN_NAME'))
    assert.equal(refreshCookie?.maxAge, -1, 'Refresh token cookie should have maxAge of -1')

    // 檢查 Access Token 的 Cookie maxAge 是否為 -1
    const accessCookie = logoutResponse.cookie(env.get('USER_ACCESS_TOKEN_NAME'))
    assert.equal(accessCookie?.maxAge, -1, 'Access token cookie should have maxAge of -1')
  })
})
