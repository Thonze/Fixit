const express = require('express')
const router = express.Router()
const defaultcontroller = require('../controller/defaultcontroller')



router.route('/')
.get(defaultcontroller.index)


module.exports = router