import RegisterEmailVerifyNotification from '#mails/user/auth/register_email_verify_notification'
import User from '#models/user'
import env from '#start/env'
import testUtils from '@adonisjs/core/services/test_utils'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('User auth register email verify send', (group) => {
  group.setup(async () => {
    await User.create({
      email: 'setup_user@gmail.com',
      password: '123456',
      username: 'setup_user',
    })
  })

  test('Send emailVerifyCode to user email', async ({ client, assert }) => {
    const { mails } = mail.fake() // activate mail module

    const response = await client.post('/user/auth/register-email-verify-send').form({
      email: 'user@gmail.com',
    })

    // created user with email
    const createdUser = await User.findBy('email', 'user@gmail.com')

    assert.isNull(createdUser?.emailVerifiedAt)
    assert.isNotNull(createdUser?.emailVerifyCode)

    // verify mail
    mails.assertSent(RegisterEmailVerifyNotification, ({ message }) => {
      message.assertTo('user@gmail.com') // converted to lowercase
      message.assertFrom(env.get('MAIL_FROM_ADDRESS'))
      message.assertReplyTo(env.get('MAIL_REPLYTO_ADDRESS'))
      // message.assertSubject('Verify email')
      return true
    })

    response.assertStatus(200)
    // response.assertBodyContains({ message: 'Email sent successfully!' })
  })

  test('When user data (email+password) has already in the DB', async ({ client }) => {
    const response = await client.post('/user/auth/register-email-verify-send').form({
      email: 'setup_user@gmail.com',
    })

    response.assertStatus(422)
    response.assertBody({
      errors: [
        { message: 'The email has already been taken', rule: 'database.unique', field: 'email' },
      ],
    })
  })

  // Clean DB
  group.each.teardown(async () => {
    const truncate = await testUtils.db().truncate()
    await truncate()
  })
})
