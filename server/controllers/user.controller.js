import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'

export const getUser = async (req, res) => {
  try {
    let user = await User.findOne({ userId: req.query.id })
    if(user){
      return res.json(user)
    }
  } catch (e) {
    return res.status(500).send(e)
  }
}


export const getUsers = async (req, res) => {
  try {
    let users = await User.find().sort('-dateAdded')
    if(users){
      res.json(users)
    }
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const addUser = async (req, res) => {
  if (!req.body.user.email || !req.body.user.password) {
    return res.status(403).end()
  }
  try {
    let user = await User.findOne({email: req.body.user.email})
    if(user){
      return res.status(500).send('该用户已存在')
    }else {
      const newUser = new User(req.body.user)

      let id = await User.count()
      newUser.userId = +id
      //hash password
      newUser.password = await bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8), null)
      //generator encryption token
      newUser.token = await jwt.sign({userId:newUser.userId, iat: Math.floor(Date.now() / 1000) - 30},'haha')
      let saved = await newUser.save()
      return res.json({user: saved})
    }
  } catch (e) {
    return res.status(500).send(e)
  }

  //ES5 Code
  // User.findOne({email: req.body.user.email}, (err,user) => {
  //   if(err){
  //     return res.status(500).send(err)
  //   }
  //   if(user){
  //     return res.status(403).send("该用户已存在")
  //   } else if(!user){
  //     User.count({},function(err,count){
  //       if(err) {
  //         return res.status(500).send(err)
  //       }
  //       const newUser = new User(req.body.user)
  //       newUser.password = newUser.generateHash(newUser.password)
  //       newUser.userId = count + 1
  //       newUser.token = jwt.sign({userId:newUser.userId, iat: Math.floor(Date.now() / 1000) - 30},'haha')
  //       newUser.save((err, saved) => {
  //         if (err) {
  //           return res.status(500).send(err)
  //         }
  //         return res.json({ user: saved })
  //       })
  //     })
  //   }
  // })
}
