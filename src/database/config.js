const { Sequelize } = require('sequelize')

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false
})

module.exports = connection
