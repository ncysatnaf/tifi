import User from '../models/user'
import AccessUser from '../models/accessUser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'

export const getUser = async (req, res) => {
  try {
    let userdata = await User.findOne({ userId: req.query.id })
    let user = new AccessUser(userdata)
    res.json(user)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getUsers = async (req, res) => {
  try {
    let users = await User.find().sort('-created_at')
    res.json(users)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const addUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(403).end()
  }
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user){
      res.status(500).send('该用户已存在')
    }else if (!user) {
      const newUser = new User(req.body)

      let id = await User.count()
      newUser.userId = +id
      //hash password
      newUser.password = await bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8), null)
      //generator encryption token
      newUser.token = await jwt.sign({ userId: newUser.userId, iat: Math.floor(Date.now() / 1000) - 30}, 'ha' )
      let saved = await newUser.save()
      res.json(saved)
    }
  } catch (e) {
    return res.status(500).send(e)
  }
}
