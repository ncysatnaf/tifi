import { Router } from 'express'
import * as UserController from '../controllers/user.controller'
const server = new Router()

server.route('/getUser').get(UserController.getUser)

server.route('/getUsers').get(UserController.getUsers)

server.route('/addUser').post(UserController.addUser)

export default server
