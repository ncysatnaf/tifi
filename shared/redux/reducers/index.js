import * as ActionTypes from '../constants/constants'
import { combineReducers } from 'redux'

const post = (state = { posts: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST :
      return {
        posts: [{
          name: action.name,
          title: action.title,
          content: action.content,
          slug: action.slug,
          cuid: action.cuid,
          _id: action._id,
        }, ...state.posts],
        post: state.post }

    case ActionTypes.CHANGE_SELECTED_POST :
      return {
        posts: state.posts,
        post: action.slug,
      }

    case ActionTypes.ADD_POSTS :
      return {
        posts: action.posts,
        post: state.post,
      }

    case ActionTypes.ADD_SELECTED_POST :
      return {
        post: action.post,
        posts: state.posts,
      }

    case ActionTypes.DELETE_POST :
      return {
        posts: state.posts.filter((post) => post._id !== action.post._id),
      }

    default:
      return state
  }
}

const chat = (state= { chats: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CHAT:
      return Object.assign({},state,{
        chats: action.chats
      })
    default:
      return state
  }
}


export default combineReducers({
  post,
  chat
})
