import User from '#models/user'
import env from '#start/env'
import { test } from '@japa/runner'

test.group('User auth password change', (group) => {
  let USER_PASSWORD_CHANGE_TEST: User

  group.setup(async () => {
    // 創建新的使用者
    USER_PASSWORD_CHANGE_TEST = await User.create({
      email: 'USER_PASSWORD_CHANGE_TEST@gmail.com',
      password: '123456',
      fullName: 'USER_PASSWORD_CHANGE_TEST',
    })
  })

  test('更改密碼', async ({ client }) => {
    const loginResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '123456' })

    const refreshToken = loginResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const accessToken = loginResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    const changePasswordResponse = await client
      .post('/api/v1/user/auth/password-change')
      .form({ password: '123456', newPassword: '111111', newPasswordConfirm: '111111' })
      .withCookie(env.get('REFRESH_TOKEN_NAME'), refreshToken)
      .withCookie(env.get('ACCESS_TOKEN_NAME'), accessToken)

    changePasswordResponse.assertStatus(200)

    // 使用原密碼登入，失敗
    const oldPasswordLoginResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '123456' })
    oldPasswordLoginResponse.assertStatus(400)

    // 使用新密碼登入，成功
    const newPasswordLoginResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_PASSWORD_CHANGE_TEST@gmail.com', password: '111111' })
    newPasswordLoginResponse.assertStatus(200)
  })
})
