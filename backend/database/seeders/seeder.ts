import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Admin from '#models/admin/admin'
import User from '#models/user/user'
import Valuer from '#models/valuer/valuer'
import { DateTime } from 'luxon'
import { PriceRange } from '#config/stripe'

export default class Seeder extends BaseSeeder {
  async run() {
    // await Seeder.admin()
    // await Seeder.valuer()
    // await Seeder.user()
    await Seeder.order()
  }

  /**
   * Seeder for Admin
   */
  static async admin() {
    await Admin.create({
      email: 'masouivan@gmail.com',
      username: 'masouivan',
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
      phone: '+61000000001',
      password: '123456',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
      status: 'noQualificationCreated',
    })

    // Valuer2: Registered, and applied qualification data, but not approved yet.
    const createdValuer2 = await Valuer.create({
      email: 'valuer2@gmail.com',
      username: 'valuer2',
      password: '123456',
      phone: '+61000000002',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
      status: 'qualificationCreated',
    })
    await createdValuer2.related('valuerQualification').create({
      serviceArea: 'south_australia',
      address: 'full-address',
      abn: '12345678987',
      certificatePath: 'fake/image0.jpg',
    })

    // Valuer3: Registered, and approved.
    const createdValuer3 = await Valuer.create({
      email: 'masouivan@gmail.com',
      username: 'valuer3',
      password: '123456',
      phone: '+61000000003',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
      status: 'approved',
    })
    await createdValuer3.related('valuerQualification').create({
      serviceArea: 'south_australia',
      address: 'full-address',
      abn: '12345678987',
      certificatePath: 'fake/image2.jpg',
    })
  }

  /**
   * Seeder for User
   */
  static async user() {
    await User.create({
      email: 'masouivan@gmail.com',
      username: 'user1',
      password: '123456',
      emailVerifiedAt: DateTime.now(),
      phoneVerifiedAt: DateTime.now(),
    })
  }

  /**
   * Seeder for Order
   */
  static async order() {
    const user = await User.first() // Get seeded User

    await user!.related('orders').create({
      ownerName: 'Mandy',
      ownerPhone: '+61000222334',
      region: 'Victoria',
      address: '500 George Street, Sydney City Center',
      priceRange: PriceRange['0M_to_1M'],

      amount: 500,
    })

    await user!.related('orders').create({
      ownerName: 'Hemsworth',
      ownerPhone: '+61000222334',
      region: 'Queensland',
      address: '500 Oxford Street, Sydney City Center',
      priceRange: PriceRange['2.5M_to_3M'],

      amount: 750,
    })
  }
}
