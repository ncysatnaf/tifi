import mongoose from 'mongoose'
const Schema = mongoose.Schema

const chatSchema = new Schema({
  author: {type: 'Object', required: true },
  content: {type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  created_at_human:{type: 'String', required: true}
})

export default mongoose.model('Chat', chatSchema);
