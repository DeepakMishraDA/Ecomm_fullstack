import express, { Request, Response } from 'express'
import passport from 'passport'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token'),
  (req: Request, res: Response) => {
    res.json('Login Succesful')
  }
)

export default router
