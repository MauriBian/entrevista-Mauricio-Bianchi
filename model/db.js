const config = require('../config')
const mongoose = require('mongoose')

mongoose.connect(`${config.db.uri}`)

mongoose.connection.on('error', (error) => {
  console.log(`Database: Cannot connect to the MongoDB engine. ${error.name}: ${error.message}`)
})

mongoose.connection.once('open', function () {
  console.log('Database: Connected to the MongoDB engine.')
})

module.exports.mongoose = mongoose