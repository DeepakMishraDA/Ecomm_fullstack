import mongoose, { Document } from 'mongoose'

type OrderDocument = Document & {
  orderid: number
  products: string[]
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
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
  ],
  date: {
    type: Date,
    require: true,
  },
  quantity: Number,
})

export default mongoose.model<OrderDocument>('Orders', order)
