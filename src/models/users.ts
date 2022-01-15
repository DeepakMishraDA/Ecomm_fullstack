import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  name: string
  email: {}
  phone: number
  date: Date
  address: string[]
}
const { Schema } = mongoose

const users = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phone: Number,
  date: Date,
  address: Array,
})

export default mongoose.model<UserDocument>('Users', users)
