const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  facebook: {
    clientID: '874824252646784',
    clientSecret: '8d981183480a63a2685e246d46b073e5',
    callbackURL:'http://localhost:8000/auth/facebook/callback'
  },
  github: {
    clientID: '19583f253bcc52905b8b',
    clientSecret: '022774f3d779e6151f0b5c149cbd7300cd7e9761',
    callbackURL:'http://localhost:8000/auth/github/callback'
  }
}

export default config
