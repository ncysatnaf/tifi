import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'

export const login = async (req,res) => {
  try {
    const {email, password} = req.body
    let user = await User.findOne({email: email})
    if (user){
      //compare and verify password
      let isMatch = await bcrypt.compareSync(password, user.password)
      if (isMatch) {
        let token = await jwt.sign({userId:user._id}, 'ha' )
        let update = await User.update({token: token})
        let updateUser = await User.find({email:email})
        res.json(updateUser)
    }else if (!isMatch) {
        res.status(403).send("Iniviald password")
      }
    } else {
      res.status(403).send("Without this user")
    }
  } catch (e) {
    return res.status(403).send(e)
  }
}
