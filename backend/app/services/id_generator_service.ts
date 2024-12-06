export default class IdGeneratorService {
  static generateOrderId() {
    const date = new Date()

    // Use Sydney timezone
    const options = {
      timeZone: 'Australia/Sydney',
      hour12: false, // 24 hour clock
    }

    // Formatted Day
    const monthDay = new Intl.DateTimeFormat('en-AU', {
      ...options,
      month: '2-digit',
      day: '2-digit',
    })
      .format(date)
      .replace('/', '') // MMDD

    // Formatted Time
    const hourMinute = new Intl.DateTimeFormat('en-AU', {
      ...options,
      hour: '2-digit',
      minute: '2-digit',
    })
      .format(date)
      .replace(':', '') // HHMM

    // Random four char
    const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase() // e.g. E82C

    return `WEVAL${monthDay}${hourMinute}${randomChars}` // e.g. WEVAL12251912A5RV
  }
}
