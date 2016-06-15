const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  facebook: {
    appid: '874824252646784',
    appSecret: '8d981183480a63a2685e246d46b073e5'
  }
}

export default config
