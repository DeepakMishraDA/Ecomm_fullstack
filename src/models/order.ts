import mongoose, { Document } from 'mongoose'

type OrderDocument = Document & {
  orderid: number
  title: string
  date: Date
  quantity: number
}

//const {Schema} = mongoose
const order = new mongoose.Schema({
  orderid: {
    type: Number,
    require: true,
    unique: true,
  },
  title: String,
  date: {
    type: Date,
    require: true,
  },
  quantity: Number,
})

export default mongoose.model<OrderDocument>('Orders', order)
