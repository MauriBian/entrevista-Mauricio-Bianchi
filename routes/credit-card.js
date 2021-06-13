var express = require('express')
var router = express.Router()
const creditCardController = require('../controllers/credit-card')

router.post('/creditcard', async (req, res, next) => {

  const allFieldsFilled = Object.keys(req.body).every(key => req.body[key])

  if (!allFieldsFilled) {
    res.status(400)
    res.send('Bad Request')
    return
  }

  try {
    creditCardController.addNewCreditCard(req.body)
    res.status(200)
    res.send('Credit card was added correctly')
  } catch (error) {
    res.status(error.status)
    res.send(error.message)
  }

})

router.get('/creditcard', async (req, res, next) => {

  if (!req.query.userId) {
    res.status(400)
    res.send('Bad Request')
    return
  }

  try {
    const result = await creditCardController.getUserCreditCards(req.query.userId)
    res.status(200)
    res.json(result)

  } catch (error) {
    res.status(error.status)
    res.send(error.message)
  }

})

module.exports = router
