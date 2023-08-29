const express = require('express')
const router = express.Router()
const {main,genToken,verifyToken} = require('../controller/email')

router.post('/sendMail',main)
router.post('/gentoken',genToken)
router.post('/verifyToken',verifyToken)

module.exports = router