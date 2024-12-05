// [r: User]

import Order, { OrderStatus } from '#models/order'
import type { HttpContext } from '@adonisjs/core/http'

export async function index({ request, response }: HttpContext) {
  // Get status searchParam
  const status = request.qs().status

  // ModelQueryBuilder (Haven't use await)
  let ordersQuery = Order.query().orderBy('created_at', 'desc')

  // Status filter
  if (status !== 'null') {
    ordersQuery = ordersQuery.where('order_status', status)
  }

  // Execute the query and get the result (Orders array)
  const orders = await ordersQuery

  // Get the count of orders for specific statuses: UNPAID, AWAITING_VALUER, IN_PROGRESS
  const chosenOrders = await Order.query()
    .whereIn('order_status', [
      OrderStatus.UNPAID,
      OrderStatus.AWAITING_VALUER,
      OrderStatus.IN_PROGRESS,
    ]) // Filter by specific statuses
    .groupBy('order_status') // Group by the `order_status` field
    .select('order_status') // Select the `order_status` field
    .count('* as count') // Get the count of each group (status)

  const chosenStatuses = [OrderStatus.UNPAID, OrderStatus.AWAITING_VALUER, OrderStatus.IN_PROGRESS]

  // Create a map of the status counts, defaulting missing statuses to 0
  const statusCounts = chosenStatuses.map((chosenStatus) => {
    const foundStatus = chosenOrders.find(
      (order) => order['$attributes'].orderStatus === chosenStatus
    )
    return {
      orderStatus: chosenStatus,
      count: foundStatus ? foundStatus['$extras'].count : '0', // Default to 0 if not found
    }
  })

  return response.ok({ orders, statusCounts })
}
