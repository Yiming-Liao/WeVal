import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Admin from '#models/admin'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    // Check if it exists or not
    const adminExists = await Admin.query().where('email', 'masouivan@gmail.com').first()

    if (!adminExists) {
      await Admin.create({
        email: 'masouivan@gmail.com',
        username: 'masouivan',
        password: '123456',
      })
    }
  }
}
