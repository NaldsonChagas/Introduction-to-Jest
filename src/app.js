const app = require('./server/server')

const connection = require('./database/config')

connection.authenticate()

app.listen(3000, () => {
  console.log('App is started')
})
