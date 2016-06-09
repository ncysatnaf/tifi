import Chat from '../models/chat'
import cuid from 'cuid'
import sanitizeHtml from 'sanitize-html'

export function getChats(req, res) {
  Chat.find().sort('-dateAdded').exec((err, chats) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ chats })

  })
}

export function addChat(req, res) {
  if (!req.body.chat.content) {
    return res.status(403).end()
  }

  const newChat = new Chat(req.body.chat)

  // Let's sanitize inputs
  newChat.content = sanitizeHtml(newChat.content)
  newChat.save((err, saved) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.json({ chat: saved })
  })
}
