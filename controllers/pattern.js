const PatternType = require('../models/PatternType')
const Pattern = require('../models/Pattern')
const PatternFile = require('../models/PatternFile')
const errorHandler = require('../utils/errorHandler')


module.exports.getAllTypes = async function(req, res) {
  try {
    const types = await PatternType.find({})
    res.status(200).json(types)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createType = async function(req, res) {
  const type = new PatternType({
    name: req.body.name,
  })

  try {
    await type.save()
    res.status(201).json(type)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
  const pattern = new Pattern({
    name: req.body.name,
    user: req.user.id,
    type: req.body.type,
    sizes: req.body.sizes,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
  })

  try {
    await pattern.save()
    res.status(201).json(pattern)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createFile = async function(req, res) {
  const pattern = new PatternFile({
    patternId: req.body.patternId,
    //user: req.user.id,
    fileSrc: req.file ? req.file.path : '',
   // patternSrc: req.file ? req.file.path : ''
  })

  try {
    await pattern.save()
    res.status(201).json(pattern)
  } catch (e) {
    errorHandler(res, e)
  }
}