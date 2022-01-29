//import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
//import { Strategy } from 'passport-jwt'

//mport { Request, Response, NextFunction } from 'express'

export const passportStrgy = new GoogleTokenStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    //getGoogleCerts: optionalCustomGetGoogleCerts,
  },
  function (parsedToken: any, googleId: any, done: any) {
    console.log('parsedToken', parsedToken)
    done(null, {})
  }
)
//  User.findOrCreate({ googleId: googleId }, function (err, user) {
//    return done(err, user)
//  })
