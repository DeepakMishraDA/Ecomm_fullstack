import express from 'express'
import { createProdDoc, findAllprod, updateProd } from '../controllers/products'

const products = express.Router()

products.get('/allproducts', findAllprod)
products.post('/', createProdDoc)
products.post('/:prodId', updateProd)
export default products
