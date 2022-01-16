import { ProdDocument } from '../models/products'

export const createProduct = async (
  prod: ProdDocument
): Promise<ProdDocument> => {
  return prod.save()
}
