import { Router } from 'express'
import * as ChatController from '../controllers/chat.controller'
const router = new Router()

// Get all Posts
router.route('/getChats').get(ChatController.getChats)

// Add a new Post
router.route('/addChat').post(ChatController.addChat)


export default router
