import passport from 'passport'
//import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'

import { Request, Response, NextFunction } from 'express'

const passportStrgy = new GoogleTokenStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    //getGoogleCerts: optionalCustomGetGoogleCerts,
  },
  function (parsedToken, googleId, done) {
    User.findOrCreate({ googleId: googleId }, function (err, user) {
      return done(err, user)
    })
  }
)
