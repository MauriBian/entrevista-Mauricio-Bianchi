var express = require('express')
var router = express.Router()

router.post('/creditcard', (req, res, next) => {
  res.send('OK')
})

module.exports = router