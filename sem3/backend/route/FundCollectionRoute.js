const express = require('express')
const router = express.Router()
const FundCollectionController = require('../controller/FundCollectionController')

router.post('/add', FundCollectionController.add)
router.get('/get', FundCollectionController.get)
router.put('/update', FundCollectionController.put)
router.delete('/delete', FundCollectionController.delete)
module.exports = router