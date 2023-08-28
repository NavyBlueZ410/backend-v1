const express = require('express')
const router = express.Router()
const {main} = require('../controller/email')

router.post('/sendMail',main)

module.exports = router