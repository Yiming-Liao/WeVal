import User from '#models/user/user'
import env from '#start/env'
import { test } from '@japa/runner'

test.group('User auth password change', (group) => {
  group.setup(async () => {
    // 創建新的使用者
    User.create({
      email: 'USER_PASSWORD_CHANGE_TEST@gmail.com',
      password: '123456',
      username: 'USER_PASSWORD_CHANGE_TEST',
    })
  })

  test('更改密碼', async ({ client }) => {
    const loginResponse = await client
      .post('/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '123456' })

    const refreshToken = loginResponse.cookie(env.get('USER_REFRESH_TOKEN_NAME'))?.value
    const accessToken = loginResponse.cookie(env.get('USER_ACCESS_TOKEN_NAME'))?.value

    const changePasswordResponse = await client
      .post('/user/auth/password-change')
      .form({ password: '123456', newPassword: '111111', newPasswordConfirm: '111111' })
      .withCookie(env.get('USER_REFRESH_TOKEN_NAME'), refreshToken)
      .withCookie(env.get('USER_ACCESS_TOKEN_NAME'), accessToken)

    changePasswordResponse.assertStatus(200)

    // 使用原密碼登入，失敗
    const oldPasswordLoginResponse = await client
      .post('/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '123456' })
    oldPasswordLoginResponse.assertStatus(400)

    // 使用新密碼登入，成功
    const newPasswordLoginResponse = await client
      .post('/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '111111' })
    newPasswordLoginResponse.assertStatus(200)
  })
})
