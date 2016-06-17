import mongoose from 'mongoose'
const Schema = mongoose.Schema

const chatSchema = new Schema({
  author: {type: 'Object',  },
  content: {type: 'String', },
  created_at: { type: 'Date', default: Date.now, }
})

export default mongoose.model('Chat', chatSchema);
