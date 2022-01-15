import express from 'express'
import { createUserDoc } from '../controllers/users'

const users = express.Router()

users.post('/', createUserDoc)

export default users
