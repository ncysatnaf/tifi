import { Router } from 'express'
import * as UserController from '../controllers/user.controller'
const router = new Router()

router.route('/getUser').get(UserController.getUser)

router.route('/getUsers').get(UserController.getUsers)

router.route('/addUser').post(UserController.addUser)

export default router
