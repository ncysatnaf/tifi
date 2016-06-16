import { Router } from 'express'
import * as AuthController from '../controllers/auth.controller'
const router = new Router()
import passport from '../util/passport'

//simple login
router.route('/login').post(AuthController.login)


//oauth login
router.get('/github',passport.authenticate('github'))
router.get('/github/callback',passport.authenticate('github',{
  successRedirect: '/',
  failureRedirect: '/',
}))
export default router
