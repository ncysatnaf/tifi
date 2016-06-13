import User from '../models/user'
import jwt from 'jsonwebtoken'

export function checkAuth(req,res){
  const {email, password} = req.body
  User.findOne({email: email}, (err,user) => {
    if(err){
      return res.status(500).send(err)
    }
    user.comparePassword(password, function(err,isMatch){
      if(isMatch){
        let token = jwt.sign({userId:user._id},'hahaha')
        User.update({token:token}).exec((err,users) => {
          if(err){
            return res.status(500).send(err)
          }
          return res.json(user)
        })
      } else {
        return res.status(403).send("Invalid email or password")
      }
    })
  })
}
