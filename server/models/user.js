import mongoose from 'mongoose'
const Schema = mongoose.Schema
import bcrypt from 'bcrypt-nodejs'

const userSchema = new Schema({
  email: {type: String, required: true },
  password: {type: String, required: true},
  created_at: { type: Date, default: Date.now, required: true },
  name: {type: String,},
  facebook: {id: String, token:String,  email: String, name: String },
  twitter: {id: String, token:String, displayName: String, username: String },
  google: {id: String, token: String, email: String, name: String },
  github: {id: String, token: String, name: String }
})
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.comparePassword = function(candidatePassword,cb){
  bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
    if(err) return cb(err)
    cb(null, isMatch)
  })
}

export default mongoose.model('User', userSchema)
