import { Request, Response, NextFunction } from 'express'
import Products from '../models/products'
import { createProduct, findAll, findOne, upDate } from '../services/products'
import { BadRequestError } from '../helpers/apiError'

export const createProdDoc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, prodid, category, specifications, price } = req.body
    const products = new Products({
      title,
      prodid,
      category,
      specifications,
      price,
    })
    await createProduct(products)
    res.json(products)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findAllprod = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allprods = await findAll()
    res.json(allprods)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const proId = req.params.proId
    res.json(findOne(proId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const updateProd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const updateId = req.params.prodId
    const updateProd = await upDate(updateId, update)
    res.json(updateProd)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
