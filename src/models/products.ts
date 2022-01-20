import mongoose, { Document } from 'mongoose'

export type ProdDocument = Document & {
  title: string
  prodid: number
  category: string
  specifications: string | number[]
  price: number
}

const { Schema } = mongoose

export const products = new Schema({
  title: String,
  prodid: { type: Number, unique: true, require: true },
  category: String,
  specifications: Array,
  price: Number,
})

export default mongoose.model<ProdDocument>('Products', products)
