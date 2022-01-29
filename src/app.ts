import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import passport from 'passport'

import users from './routers/user'
import products from './routers/products'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'
import { passportStrgy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

passport.use(passportStrgy)

// Use movie router
app.use('/api/v1/users', users)
app.use('/api/v2/products', products)

// Custom API error handler
app.use(apiErrorHandler) //at the bottom bcz it is the default error

export default app
