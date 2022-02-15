//import products from '../models/products'
import Products, { ProdDocument } from '../models/products'
import { NotFoundError } from '../helpers/apiError'

export const createProduct = async (
  prod: ProdDocument
): Promise<ProdDocument> => {
  return prod.save()
}

export const findAll = async (): Promise<ProdDocument[]> => {
  return Products.find()
}

export const findOne = async (id: string): Promise<ProdDocument> => {
  const foundProd = await Products.findById(id)

  if (!foundProd) {
    throw new NotFoundError(`Product ${id} not found`)
  }
  return foundProd
}

export const upDate = async (
  updateId: string,
  update: Partial<ProdDocument>
) => {
  const findDoc = await Products.findByIdAndUpdate(updateId, update, {
    new: true,
  })
  if (!findDoc) {
    throw new NotFoundError(`Product ${updateId} not found`)
  }
  return findDoc
}

export const deletProd = async (delId: string) => {
  const deltdProd = await Products.findByIdAndDelete(delId)
  if (!deltdProd) {
    throw new NotFoundError(`Product ${delId} not found`)
  }
  return deltdProd
}
