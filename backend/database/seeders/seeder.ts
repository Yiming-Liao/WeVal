import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Admin from '#models/admin/admin'
import User from '#models/user/user'
import Valuer from '#models/valuer/valuer'
import { DateTime } from 'luxon'

export default class Seeder extends BaseSeeder {
  async run() {
    await Seeder.admin()
    await Seeder.valuer()
    await Seeder.user()
  }

  /**
   * Seeder for Admin
   */
  static async admin() {
    await Admin.create({
      email: 'admin@gmail.com',
      username: 'admin',
      password: '123456',
    })
  }

  /**
   * Seeder for Valuer
   */
  static async valuer() {
    // Valuer1: Registered, but not applied qualification data yet.
    await Valuer.create({
      email: 'valuer1@gmail.com',
      username: 'valuer1',
      phone: '+61000000000',
      password: '123456',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
    })

    // Valuer2: Registered, and applied qualification data, but not approved yet.
    const createdValuer2 = await Valuer.create({
      email: 'valuer2@gmail.com',
      username: 'valuer2',
      password: '123456',
      phone: '+61000000000',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
      isQualified: false,
      isValuerQualificationCreated: true,
    })
    await createdValuer2.related('valuerQualification').create({
      serviceArea: 'south_australia',
      address: 'full-address',
      abn: '12345678987',
      certificatePath: 'fake/image.jpg',
    })

    // Valuer3: Registered, and approved.
    const createdValuer3 = await Valuer.create({
      email: 'valuer3@gmail.com',
      username: 'valuer3',
      password: '123456',
      phone: '+61000000000',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
      isQualified: true,
      isValuerQualificationCreated: true,
    })
    await createdValuer3.related('valuerQualification').create({
      serviceArea: 'south_australia',
      address: 'full-address',
      abn: '12345678987',
      certificatePath: 'fake/image.jpg',
    })
  }

  /**
   * Seeder for User
   */
  static async user() {
    await User.create({
      email: 'user1@gmail.com',
      username: 'user1',
      password: '123456',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
    })
  }
}
