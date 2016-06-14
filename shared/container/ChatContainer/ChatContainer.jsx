import React, { PropTypes, Component } from 'react'
import PostListView from '../PostListView/PostListView'
import PostCreateView from '../../components/PostCreateView/PostCreateView'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions/actions'

class ChatContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showAddPost: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.add = this.add.bind(this)
  }

  handleClick(e) {
    this.setState({
      showAddPost: !this.state.showAddPost,
    })

    e.preventDefault()
  }

  add(name, title, content) {
    this.props.dispatch(Actions.addPostRequest({ name, title, content }))
    this.setState({
      showAddPost: false,
    })
  }

  componentDidMount() {
    if(this.props.posts.length === 0) {
      this.props.dispatch(Actions.fetchPosts())
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <PostCreateView addPost={this.add}
            showAddPost={this.state.showAddPost}/>
          <PostListView posts={this.props.posts}/>
        </div>
      </div>
    )
  }
}

ChatContainer.need = [() => { return Actions.fetchChats() }]
ChatContainer.contextTypes = {
  router: React.PropTypes.object,
}

function mapStateToProps(store) {
  return {
    chats: store.chats,
  }
}

ChatContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(ChatContainer)
