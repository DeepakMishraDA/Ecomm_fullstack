import express, { Response, Request } from 'express'

const users = express.Router()

users.all('/', (req: Request, res: Response) => {
  res.send('Hi Dashanan')
})

export default users
