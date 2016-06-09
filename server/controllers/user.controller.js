import User from '../models/user'

export function getUser(req, res) {
  const name = req.query.name
  User.findOne({ name: name }).exec((err, user) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ user })
  })
}

export function getUsers(req, res) {
  User.find().sort('-dateAdded').exec((err, users) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json({ users })
  })
}

export function addUser(req, res) {
  if (!req.body.user.name || !req.body.user.password) {
    return res.status(403).end()
  }

  const newUser = new User(req.body.user)
  newUser.password = newUser.generateHash(newUser.password)
  // Let's sanitize inputs
  newUser.save((err, saved) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.json({ user: saved })
  })
}
