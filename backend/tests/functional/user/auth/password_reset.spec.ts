import User from '#models/user/user'
import { test } from '@japa/runner'

test.group('User auth password reset', (group) => {
  let USER_PASSWORD_RESET_TEST: User

  group.setup(async () => {
    // 創建新的使用者
    USER_PASSWORD_RESET_TEST = await User.create({
      email: 'USER_PASSWORD_RESET_TEST@gmail.com',
      password: '123456',
      username: 'USER_PASSWORD_RESET_TEST',
    })
  })

  test('重設密碼', async ({ client, assert }) => {
    await client
      .post('/user/auth/password-forgot')
      .form({ email: 'USER_PASSWORD_RESET_TEST@gmail.com' })

    const foundUser = await User.findBy('email', 'USER_PASSWORD_RESET_TEST@gmail.com')
    assert.isNotNull(foundUser?.passwordResetToken)
    assert.isNotNull(foundUser?.passwordResetExpiresAt)

    const response = await client.post('/user/auth/password-reset').form({
      passwordResetToken: foundUser?.passwordResetToken,
      password: '123456',
      passwordConfirm: '123456',
    })

    response.assertStatus(200)

    // 取得信箱驗證完成的使用者資料
    const updatedUser = await User.findBy('email', 'USER_PASSWORD_RESET_TEST@gmail.com')

    assert.isNull(updatedUser?.passwordResetToken)
    assert.isNull(updatedUser?.passwordResetExpiresAt)
  })
})
