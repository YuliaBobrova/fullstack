const express = require('express')
const passport = require('passport')
const controller = require('../controllers/pattern')
const upload = require('../middleware/upload')
const router = express.Router()

router.get('/types', passport.authenticate('jwt', {session:false}), controller.getAllTypes)
router.post('/add-type', passport.authenticate('jwt', {session:false}), controller.createType)
router.post('/add', passport.authenticate('jwt', {session:false}), controller.create)
router.post('/add-file', passport.authenticate('jwt', {session:false}), upload.single('image'), controller.createFile)


module.exports = router