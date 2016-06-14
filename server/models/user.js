import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: {type: String, required: true},
  email: {type: String, required: true },
  token: {type: String, required: true},
  password: {type: String, required: true},
  created_at: { type: Date, default: Date.now, required: true },
  name: {type: String },
  facebook: {id: String, token:String,  email: String, name: String },
  twitter: {id: String, token:String, displayName: String, username: String },
  google: {id: String, token: String, email: String, name: String },
  github: {id: String, token: String, name: String }
})


export default mongoose.model('User', userSchema)
