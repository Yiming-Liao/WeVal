import UserEmailVerifyNotification from '#mails/user_email_verify_notification'
import env from '#start/env'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('User auth register', () => {
  test('註冊新帳號', async ({ client }) => {
    const { mails } = mail.fake() // 先啟動模擬 mail 模組

    const response = await client.post('/api/v1/user/auth/register').form({
      fullName: `USER_REGISTER_TEST`,
      email: 'USER_REGISTER_TEST@gmail.com',
      password: '123456',
      passwordConfirm: '123456',
    })

    // 驗證信
    mails.assertSent(UserEmailVerifyNotification, ({ message }) => {
      message.assertTo('USER_REGISTER_TEST@gmail.com')
      message.assertFrom(env.get('MAIL_FROM_ADDRESS'))
      message.assertReplyTo(env.get('MAIL_REPLYTO_ADDRESS'))
      // message.assertSubject('Verify email')
      return true
    })

    response.assertStatus(201)
    response.assertBodyContains({
      // message: 'Successful register',
      userData: {
        fullName: 'USER_REGISTER_TEST',
        email: 'USER_REGISTER_TEST@gmail.com',
      },
    })
    response.assertCookie(env.get('REFRESH_TOKEN_NAME')) // 獲得 Refresh Token
    response.assertCookie(env.get('ACCESS_TOKEN_NAME')) // 獲得 Access Token
  })

  test('註冊 已經存在的 Email', async ({ client }) => {
    const response = await client.post('/api/v1/user/auth/register').form({
      fullName: `USER_REGISTER_TEST`,
      email: 'USER_REGISTER_TEST@gmail.com',
      password: '123456',
      passwordConfirm: '123456',
    })

    response.assertStatus(422)
    // response.assertBody({
    //   errors: [{ message: 'The email has already been taken', rule: 'database.unique', field: 'email' },],
    // })
  })
})
