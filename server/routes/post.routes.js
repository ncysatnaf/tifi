import { Router } from 'express'
import * as PostController from '../controllers/post.controller'
const server = new Router()

// Get all Posts
server.route('/getPosts').get(PostController.getPosts)

// Get one post by title
server.route('/getPost').get(PostController.getPost)

// Add a new Post
server.route('/addPost').post(PostController.addPost)

// Delete a Post
server.route('/deletePost').post(PostController.deletePost)

export default server
