import UserPasswordResetNotification from '#mails/user/auth/password_reset_notification'
import User from '#models/user/user'
import env from '#start/env'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('User auth password forgot', (group) => {
  group.setup(async () => {
    // 創建新的使用者
    await User.create({
      email: 'USER_PASSWORD_FORGOT_TEST@gmail.com',
      password: '123456',
      username: 'USER_PASSWORD_FORGOT_TEST',
    })
  })

  test('忘記密碼', async ({ client, assert }) => {
    const { mails } = mail.fake() // 先啟動模擬 mail 模組

    // 取得使用者資料
    const foundUser = await User.findBy('email', 'USER_PASSWORD_FORGOT_TEST@gmail.com')

    assert.isNull(foundUser?.passwordResetToken)
    assert.isNull(foundUser?.passwordResetTokenExpiresAt)

    const response = await client
      .post('/user/auth/password-forgot')
      .form({ email: 'USER_PASSWORD_FORGOT_TEST@gmail.com' })

    // 驗證信
    mails.assertSent(UserPasswordResetNotification, ({ message }) => {
      message.assertTo('USER_PASSWORD_FORGOT_TEST@gmail.com')
      message.assertFrom(env.get('MAIL_FROM_ADDRESS'))
      message.assertReplyTo(env.get('MAIL_REPLYTO_ADDRESS'))
      // message.assertSubject('Verify email')
      return true
    })

    response.assertStatus(200)

    // 取得寄送出密碼重設驗證信的使用者資料
    const updatedUser = await User.findBy('email', 'USER_PASSWORD_FORGOT_TEST@gmail.com')

    assert.isNotNull(updatedUser?.passwordResetToken)
    assert.isNotNull(updatedUser?.passwordResetTokenExpiresAt)
  })
})
