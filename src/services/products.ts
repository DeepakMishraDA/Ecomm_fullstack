import Products, { ProdDocument } from '../models/products'

export const createProduct = async (
  prod: ProdDocument
): Promise<ProdDocument> => {
  return prod.save()
}

export const findAll = async (): Promise<ProdDocument[]> => {
  return Products.find()
}
