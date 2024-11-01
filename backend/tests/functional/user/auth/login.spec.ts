import User from '#models/user'
import env from '#start/env'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('User auth login', (group) => {
  group.setup(async () => {
    await User.create({
      email: 'setup_user@gmail.com',
      password: '123456',
      username: 'setup_user',
    })
  })

  test('Login with correct email & password', async ({ client }) => {
    const response = await client
      .post('/user/auth/login')
      .form({ email: 'setup_user@gmail.com', password: '123456' })

    response.assertStatus(200)
    response.assertBodyContains({
      // message: 'Successful login',
      user: {
        username: 'setup_user',
        email: 'setup_user@gmail.com',
      },
    })
    response.assertCookie(env.get('REFRESH_TOKEN_NAME'))
    response.assertCookie(env.get('ACCESS_TOKEN_NAME'))
  })

  test('Login with wrong password', async ({ client }) => {
    const response = await client
      .post('/user/auth/login')
      .form({ email: 'setup_user@gmail.com', password: '000000' })
    response.assertStatus(400)
    // response.assertBody({ errors: [{ message: 'Invalid user credentials' }] })
  })

  test('Login will refresh access token a& refresh token', async ({ client, assert }) => {
    // First login
    const firstResponse = await client
      .post('/user/auth/login')
      .form({ email: 'setup_user@gmail.com', password: '123456' })

    const oldRefreshToken = firstResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const oldAccessToken = firstResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    // Second login
    const secondResponse = await client
      .post('/user/auth/login')
      .form({ email: 'setup_user@gmail.com', password: '123456' })

    const newRefreshToken = secondResponse.cookie(env.get('REFRESH_TOKEN_NAME'))?.value
    const newAccessToken = secondResponse.cookie(env.get('ACCESS_TOKEN_NAME'))?.value

    // is Token different?
    assert.isTrue(oldRefreshToken !== newRefreshToken)
    assert.isTrue(oldAccessToken !== newAccessToken)
  })

  // Clean DB
  group.each.teardown(async () => {
    const truncate = await testUtils.db().truncate()
    await truncate()
  })
})
