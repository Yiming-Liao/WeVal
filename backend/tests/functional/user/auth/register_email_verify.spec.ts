import User from '#models/user'
import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('User auth register email verify', (group) => {
  group.setup(async () => {
    await User.create({
      email: 'setup_user1@gmail.com',
      password: '123456',
      username: 'setup_user1',
      emailVerifyCode: '000000',
    })

    await User.create({
      email: 'setup_user2@gmail.com',
      password: '123456',
      username: 'setup_user2',
      emailVerifyCode: '000000',
    })
  })

  test('Verify emailVerifyCode when is correct', async ({ client, assert }) => {
    const foundUser = await User.findBy('email', 'setup_user1@gmail.com')
    assert.isNull(foundUser?.emailVerifiedAt)
    assert.isNotNull(foundUser?.emailVerifyCode)

    const response = await client.post('/user/auth/register-email-verify').form({
      email: 'setup_user1@gmail.com',
      emailVerifyCode: '000000',
    })

    const Updated = await User.findBy('email', 'setup_user1@gmail.com')
    assert.isNotNull(Updated?.emailVerifiedAt)
    assert.isNull(Updated?.emailVerifyCode)

    response.assertStatus(200)
    // response.assertBodyContains({ message: 'Email verified successfully!' })
  })

  test('Verify emailVerifyCode when is wrong', async ({ client, assert }) => {
    const foundUser = await User.findBy('email', 'setup_user2@gmail.com')
    assert.isNull(foundUser?.emailVerifiedAt)
    assert.isNotNull(foundUser?.emailVerifyCode)

    const response = await client.post('/user/auth/register-email-verify').form({
      email: 'setup_user2@gmail.com',
      emailVerifyCode: '999999',
    })

    const Updated = await User.findBy('email', 'setup_user2@gmail.com')
    assert.isNull(Updated?.emailVerifiedAt)
    assert.isNotNull(Updated?.emailVerifyCode)

    response.assertStatus(400)
    // response.assertBodyContains({ message: 'Verification code is not correct' })
  })

  // Clean DB
  group.each.teardown(async () => {
    const truncate = await testUtils.db().truncate()
    await truncate()
  })
})
