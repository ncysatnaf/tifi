import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'

export const checkAuth = async (req,res) => {
  try {
    const {email, password} = req.body
    let user = await User.findOne({email: email})
    //compare and verify password
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
}
