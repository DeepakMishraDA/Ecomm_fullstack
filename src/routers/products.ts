import express from 'express'
import { createProdDoc } from '../controllers/products'

const products = express.Router()

products.post('/', createProdDoc)

export default products
