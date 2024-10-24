import User from '#models/user'
import env from '#start/env'
import { test } from '@japa/runner'

test.group('User auth login', (group) => {
  let USER_LOGIN_TEST: User

  group.setup(async () => {
    // 創建新的使用者
    USER_LOGIN_TEST = await User.create({
      email: 'USER_LOGIN_TEST@gmail.com',
      password: '123456',
      fullName: 'USER_LOGIN_TEST',
    })
  })

  test('使用 Email 以及 密碼 登入', async ({ client }) => {
    const response = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_LOGIN_TEST@gmail.com', password: '123456' })
      .withGuard('user')
      .loginAs(USER_LOGIN_TEST)

    response.assertStatus(200)
    response.assertBodyContains({
      // message: 'Successful login',
      userData: {
        fullName: 'USER_LOGIN_TEST',
        email: 'USER_LOGIN_TEST@gmail.com',
      },
    })
    response.assertCookie(env.get('REFRESH_TOKEN_NAME')) // 獲得 Refresh Token
    response.assertCookie(env.get('ACCESS_TOKEN_NAME')) // 獲得 Access Token
  })

  test('使用 錯誤密碼 登入', async ({ client }) => {
    const response = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_LOGIN_TEST@gmail.com', password: 'xxxxxx' })
    response.assertStatus(400)
    // response.assertBody({ errors: [{ message: 'Invalid user credentials' }] })
  })

  test('登入後會刷新 Refresh Token 以及 Access Token', async ({ client, assert }) => {
    // 第一次登入並獲取 Token
    const firstResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_LOGIN_TEST@gmail.com', password: '123456' })

    const oldRefreshToken = firstResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const oldAccessToken = firstResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    // 第二次登入，檢查是否刷新 Token
    const secondResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_LOGIN_TEST@gmail.com', password: '123456' })

    const newRefreshToken = secondResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const newAccessToken = secondResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    // 檢查 Token 刷新是否成功
    assert.isTrue(oldRefreshToken !== newRefreshToken)
    assert.isTrue(oldAccessToken !== newAccessToken)
  })
})
