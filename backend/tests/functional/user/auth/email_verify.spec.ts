import User from '#models/user'
import env from '#start/env'
import { test } from '@japa/runner'

test.group('User auth email verify', () => {
  test('驗證 信箱驗證信', async ({ client, assert }) => {
    const registerRsponse = await client.post('/api/v1/user/auth/register').form({
      fullName: `USER_EMAIL_VERIFY_TEST`,
      email: 'USER_EMAIL_VERIFY_TEST@gmail.com',
      password: '123456',
      passwordConfirm: '123456',
    })

    // 取得信箱驗證完成的使用者資料
    const foundUser = await User.findBy('email', 'USER_EMAIL_VERIFY_TEST@gmail.com')

    assert.isNull(foundUser?.emailVerifiedAt)
    assert.isNotNull(foundUser?.emailVerifyToken)

    const refreshToken = registerRsponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const accessToken = registerRsponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    // 取得註冊完成的使用者資料
    const registeredUser = await User.findBy('email', 'USER_EMAIL_VERIFY_TEST@gmail.com')

    const response = await client
      .post('/api/v1/user/auth/email-verify')
      .form({
        emailVerifyToken: registeredUser?.emailVerifyToken,
      })
      .withCookie(env.get('REFRESH_TOKEN_NAME'), refreshToken)
      .withCookie(env.get('ACCESS_TOKEN_NAME'), accessToken)

    response.assertStatus(200)

    // 取得信箱驗證完成的使用者資料
    const updatedUser = await User.findBy('email', 'USER_EMAIL_VERIFY_TEST@gmail.com')

    assert.isNotNull(updatedUser?.emailVerifiedAt)
    assert.isNull(updatedUser?.emailVerifyToken)
  })
})
