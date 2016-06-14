import mongoose from 'mongoose'
const Schema = mongoose.Schema

const accessUserSchema = new Schema({
  userId: {type: String, required: true},
  email: {type: String, required: true },
  created_at: { type: Date, default: Date.now, required: true },
  name: {type: String },
  facebook: {id: String,   email: String, name: String },
  twitter: {id: String,  displayName: String, username: String },
  google: {id: String,  email: String, name: String },
  github: {id: String,  name: String }
})


export default mongoose.model('', accessUserSchema)
