import express from 'express'
import { createProdDoc, findAllprod } from '../controllers/products'

const products = express.Router()

products.get('/allproducts', findAllprod)
products.post('/', createProdDoc)

export default products
