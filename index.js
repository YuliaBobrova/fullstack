const app = require('./app')
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const keys = require('./config/keys')


async function start() {
  try {
    await mongoose.connect(keys.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    
    app.listen(port, () => console.log(`Started at ${port} port`))
  } catch (e) {
    console.log(e)
  }
}

start()

