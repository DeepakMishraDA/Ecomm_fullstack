import express from 'express'
import { createUserDoc, userFindall } from '../controllers/users'

const users = express.Router()

users.get('allusers', userFindall)
users.post('/', createUserDoc)

export default users
