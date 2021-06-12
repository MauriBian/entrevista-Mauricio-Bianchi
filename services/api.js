const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const creditCardRoutes = require('../routes/credit-card')

const port = config.api.port || 3000

const app = express()
app.use(bodyParser.json())

const server = app.listen(port, function () {
  console.log(`HTTP server listening on *:${port}`)
})

app.use('/', creditCardRoutes)

app.use('*', (req, res, next) => {
  return res
    .status(404)
    .send({
      message: 'Not found'
    })
})