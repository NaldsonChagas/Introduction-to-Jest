const express = require('express')
const router = express.Router()

const productController = require('../controller/product/productController')

router.post('/', productController.save)

module.exports = router
