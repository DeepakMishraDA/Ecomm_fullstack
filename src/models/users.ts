import mongoose, { Document } from 'mongoose'
import Products from './products'

export type UserDocument = Document & {
  name: string
  email: string
  phone: number
  products: []
  address: string[]
}
const { Schema } = mongoose

const users = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phone: Number,
  products: [Products],
  address: Array,
})

export default mongoose.model<UserDocument>('Users', users)
