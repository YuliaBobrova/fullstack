const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patternFulesSchema = new Schema({
  patternId: {
    type: String,
    required: true
  },
  fileSrc: {
    type: String,
    default: '',
  }
})

module.exports = mongoose.model('patternFiles', patternFulesSchema)