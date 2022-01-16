import mongoose, { Document } from 'mongoose'

type ProdDocument = Document & {
  title: string
  prodid: number
  category: string
  specifications: string | number[]
  price: number
}

const { Schema } = mongoose

const products = new Schema({
  title: String,
  prodid: Number,
  category: String,
  specifications: Array,
  price: Number,
})

export default mongoose.model<ProdDocument>('Products', products)
