import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  local:{
    userId: String,
    email:  String,
    token: String,
    password: String,
    name: String,
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  github: {
    id: String,
    token: String,
    name: String,
    email: String,
    avatar_url: String,
    url: String
  },
  created_at: { type: Date, default: Date.now, required: true },
})


export default mongoose.model('User', userSchema)
