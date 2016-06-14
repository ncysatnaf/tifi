import Chat from '../models/chat'
import cuid from 'cuid'
import sanitizeHtml from 'sanitize-html'

export const getChats = async (req, res) => {
  try {
    let chats = await Chat.find().sort('-dateAdded')
    res.json(chats)
  } catch (e) {
      return res.status(500).send(e)
  }
}

export const addChat = async (req, res) =>  {
  if (!req.body.chat.content) {
    return res.status(403).end()
  }
  try {
    const newChat = new Chat(req.body.chat)
    // Let's sanitize inputs
    newChat.content = sanitizeHtml(newChat.content)
    let saved = await newChat.save()
    res.json({ chat: saved })
  } catch (e) {
    res.status(500).send(e)
  }
}
