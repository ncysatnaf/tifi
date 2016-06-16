import passport from 'passport'
import {Strategy as GithubStategy }  from 'passport-github'
import {Strategy as FacebookStrategy }  from 'passport-facebook'
import config from '../config'
import User from '../models/user'

passport.serializeUser((user, done) => {
  return done(null, user)
})

passport.deserializeUser((user,done)=> {null,user})

passport.use(new GithubStategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log(profile, 'github')
    let user = await User.findOne({'github.id': profile.id})
    if(user){
      return done(null, user)
    } else {
      const newUser = new User({github: profile._json})
      newUser.github.token = accessToken
      console.log(newUser)
      let saved = await newUser.save()
      return done(null,saved)
    }
  } catch (e) {
    throw e
  }
}))

passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  passReqToCallback: true
}, async (accessToken, refreshToken, profile, done) => {
  process.nextTick(async ()=>{
    try {
      console.log(profile,accessToken,'facebook')
      let user = await User.findOne({'facebook.id': profile.id})
      if(user){
        return done(null, user)
      } else {
        const newUser = new User({facebook:profile})
        newUser.facebook.token = accessToken
        let saved = await newUser.save()
        return done(null,saved)
      }
    } catch (e) {
      throw e
    }
  })
}))

export default passport
