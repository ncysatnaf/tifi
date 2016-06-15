import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../redux/actions/actions'

class ChatContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }


  render() {
    const {chats} = this.props
    let chatList = chats &&chats.map((chat,i)=> {
      return (
        <p key = {i}>{chat.content}</p>
      )
    })
    return (
      <div>
        <div className="container">
          {chatList}
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
    chats: store.chat.chats,
  }
}

ChatContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(ChatContainer)
