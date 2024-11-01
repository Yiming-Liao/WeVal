import User from '#models/user'
import env from '#start/env'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'
import { DateTime } from 'luxon'

test.group('User auth register', (group) => {
  group.setup(async () => {
    await User.create({
      email: 'setup_user@gmail.com',
      emailVerifiedAt: DateTime.now(),
    })
  })

  test('Register', async ({ client }) => {
    const response = await client.post('/user/auth/register').form({
      email: 'setup_user@gmail.com',
      username: `setup_user`,
      password: '123456',
      passwordConfirm: '123456',
    })

    response.assertStatus(201)
    response.assertBodyContains({
      // message: 'Successful register',
      user: {
        username: 'setup_user',
        email: 'setup_user@gmail.com',
      },
    })
    response.assertCookie(env.get('REFRESH_TOKEN_NAME')) // 獲得 Refresh Token
    response.assertCookie(env.get('ACCESS_TOKEN_NAME')) // 獲得 Access Token
  })

  test('Register with a email is not existed in DB', async ({ client }) => {
    const response = await client.post('/user/auth/register').form({
      username: `user`,
      email: 'random_email_address@gmail.com',
      password: '123456',
      passwordConfirm: '123456',
    })

    response.assertStatus(422)
    response.assertBody({
      errors: [
        { message: 'The selected email is invalid', rule: 'database.exists', field: 'email' },
      ],
    })
  })

  // Clean DB
  group.each.teardown(async () => {
    const truncate = await testUtils.db().truncate()
    await truncate()
  })
})
