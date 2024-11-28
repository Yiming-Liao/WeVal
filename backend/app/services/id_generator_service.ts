export default class IdGeneratorService {
  static generateOrderId() {
    const date = new Date()
    const monthDay = `${date.getMonth() + 1}${date.getDate()}`.padStart(4, '0') // MMDD
    const hourMinute = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}` //HHMM

    // Random 4 char
    const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase() // eg. E82C

    return `WEVAL${monthDay}${hourMinute}${randomChars}`
  }
}
