import { Router } from 'express'
import * as AuthController from '../controllers/auth.controller'
const server = new Router()

server.route('/login').post(AuthController.checkAuth)

export default server
