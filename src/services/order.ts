import Order, { OrderDocument } from '../models/order'
import { NotFoundError } from '../helpers/apiError'

export const createOrd = async (order: OrderDocument) => {
  return order.save()
}
