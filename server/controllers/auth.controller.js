import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'

export const checkAuth = async (req,res) => {
  try {
    const {email, password} = req.body
    let user = await User.findOne({email: email})
    let isMatch = await bcrypt.compareSync(password, user.password)
    if(isMatch){
      let token = await jwt.sign({userId:user._id},'hahaha')
      let update = await User.update({token: token})
      let updateUser = await User.find({email:email})
      return res.json(updateUser)
    }
  } catch (e) {
    return res.status(403).send(e)
  }

  //ES5 Code
  // User.findOne({email: email}, (err,user) => {
  //   if(err){
  //     return res.status(500).send(err)
  //   }
  //   user.comparePassword(password, function(err,isMatch){
  //     if(isMatch){
  //       let token = jwt.sign({userId:user._id},'hahaha')
  //       User.update({token:token}).exec((err,users) => {
  //         if(err){
  //           return res.status(500).send(err)
  //         }
  //         return res.json(user)
  //       })
  //     } else {
  //       return res.status(403).send("Invalid email or password")
  //     }
  //   })
  // })
}
