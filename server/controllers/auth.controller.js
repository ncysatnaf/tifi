import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import passport from '../util/passport'

export const login = async (req,res) => {
  try {
    const {email, password} = req.body
    let user = await User.findOne({'local.email': email})
    if (user){
      //compare and verify password
      console.log(user.local.password)
      let isMatch = await bcrypt.compareSync(password, user.local.password)
      console.log(isMatch)
      if (isMatch) {
        let token = await jwt.sign({userId:user._id}, 'ha' )
        let update = await User.findOneAndUpdate({token: token})
        res.json(update)
      }else if (!isMatch) {
        res.status(403).send("密码错误")
      }
    } else {
      res.status(403).send("并没有这个用户。")
    }
  } catch (e) {
    return res.status(403).send(e)
  }
}
