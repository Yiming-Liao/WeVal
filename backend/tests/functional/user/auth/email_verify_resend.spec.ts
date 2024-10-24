import UserEmailVerifyNotification from '#mails/user_email_verify_notification'
import User from '#models/user'
import env from '#start/env'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('User auth email verify resend', (group) => {
  let USER_EMAIL_VERIFY_RESEND_TEST: User

  group.setup(async () => {
    // 創建新的使用者
    USER_EMAIL_VERIFY_RESEND_TEST = await User.create({
      email: 'USER_EMAIL_VERIFY_RESEND_TEST@gmail.com',
      password: '123456',
      fullName: 'USER_EMAIL_VERIFY_RESEND_TEST',
    })
  })
  test('再次寄送驗證信', async ({ client }) => {
    const { mails } = mail.fake() // 先啟動模擬 mail 模組

    const loginResponse = await client
      .post('/api/v1/user/auth/login')
      .form({ email: 'USER_EMAIL_VERIFY_RESEND_TEST@gmail.com', password: '123456' })

    loginResponse.assertCookie(env.get('REFRESH_TOKEN_NAME')) // 獲得 Refresh Token
    loginResponse.assertCookie(env.get('ACCESS_TOKEN_NAME')) // 獲得 Access Token

    const newRefreshToken = loginResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const newAccessToken = loginResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    await client
      .post('/api/v1/user/auth/email-verify-resend')
      .withCookie(env.get('REFRESH_TOKEN_NAME'), newRefreshToken)
      .withCookie(env.get('ACCESS_TOKEN_NAME'), newAccessToken)

    // 驗證信
    mails.assertSent(UserEmailVerifyNotification, ({ message }) => {
      message.assertTo('USER_EMAIL_VERIFY_RESEND_TEST@gmail.com')
      message.assertFrom(env.get('MAIL_FROM_ADDRESS'))
      message.assertReplyTo(env.get('MAIL_REPLYTO_ADDRESS'))
      // message.assertSubject('Verify email')
      return true
    })
  })
})
