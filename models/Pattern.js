const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patternSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sizes: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('patterns', patternSchema)