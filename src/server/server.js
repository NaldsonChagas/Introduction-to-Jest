const express = require('express')
const app = express()

app.use(express.json())

const productRouter = require('../routes/product')

app.use('/product', productRouter)

module.exports = app
