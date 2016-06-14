import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './container/App'
import PostContainer from './container/PostContainer/PostContainer'
import PostDetailView from './container/PostDetailView/PostDetailView'
import ChatContainer from './container/ChatContainer/ChatContainer'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PostContainer} />
    <Route path="/post/:slug" component={PostDetailView}/>
    <Route path="/chat" component={ChatContainer}/>
  </Route>
)

export default routes
