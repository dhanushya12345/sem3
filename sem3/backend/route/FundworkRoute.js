const express = require('express')
const router = express.Router()
const FundWorkController = require('../controller/FundWorkController')

router.post('/add', FundWorkController.add)
router.get('/get', FundWorkController.get)
module.exports = router