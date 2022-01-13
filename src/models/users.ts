import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  name: string
  email: string
  phone: number
  address: string[]
}
const { Schema } = mongoose

const users = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: Array,
})

export default mongoose.model<UserDocument>('Users', users)
