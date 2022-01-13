import { Request, Response } from 'express'
import Users from '../models/users'
import { createUser } from '../services/user'

export const createUserDoc = async (req: Request, res: Response) => {
  const { name, email, phone, address } = req.body
  const user = new Users({
    name,
    email,
    phone,
    address,
  })
  await createUser(user)
  res.json(user)
}
