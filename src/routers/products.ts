import express from 'express'
import {
  createProdDoc,
  findAllprod,
  updateProd,
  deleteProd,
} from '../controllers/products'

const products = express.Router()

products.get('/allproducts', findAllprod)
products.post('/', createProdDoc)
products.post('/:prodId', updateProd)
products.delete('/:delId', deleteProd)
export default products
