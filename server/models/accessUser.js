import mongoose from 'mongoose'
const Schema = mongoose.Schema

const accessUserSchema = new Schema({
  local:{
    userId: String,
    email:  String,
    name: String,
  },
  facebook: {
    id: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    email: String,
    name: String
  },
  github: {
    id: String,
    name: String
  },
  created_at: { type: Date, default: Date.now, required: true },
})


export default mongoose.model('', accessUserSchema)
