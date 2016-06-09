import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt-nodejs'

const userSchema = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  created_at: { type: Date, default: Date.now, required: true },
  email: {type: String },
  facebook: {id: String, token:String,  email: String, name: String },
  twitter: {id: String, token:String, displayName: String, username: String },
  google: {id: String, token: String, email: String, name: String },
})
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

export default mongoose.model('User', userSchema)
