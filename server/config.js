const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  github: {
    clientID: '19583f253bcc52905b8b',
    clientSecret: '022774f3d779e6151f0b5c149cbd7300cd7e9761',
    callbackURL:'http://localhost:8000/auth/github/callback'
  }
}

export default config
