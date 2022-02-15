import Order, { OrderDocument } from '../models/order'
import { NotFoundError } from '../helpers/apiError'

export const createOrd = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save()
}

export const findallOrd = async (): Promise<OrderDocument[]> => {
  return Order.find()
}
