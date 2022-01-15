import { Request, Response, NextFunction } from 'express'
import Users from '../models/users'
import { createUser } from '../services/user'
import { BadRequestError } from '../helpers/apiError'

export const createUserDoc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email } = req.body
    const user = new Users({
      name,
      email,
      //phone,
      //date,
      // address,
    })
    await createUser(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
