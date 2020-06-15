const { DataTypes } = require('sequelize')

const connection = require('../config')

const Product = connection.define('product', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})

Product.sync({ force: false })
module.exports = Product
