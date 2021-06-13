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
    res.send('The credit card was added correctly')
  } catch (error) {
    res.status(500)
    res.send('Internal server error')
  }

})

router.get('/creditcard', async (req, res, next) => {

  if (!req.query.userId) {
    res.status(400)
    res.send('Bad Request')
    return
  }

  try {
    creditCardController.getUserCreditCards(req.query.userId)
    res.status(200)
    res.send('The credit card was added correctly')  

  } catch (error) {
    res.status(500)
    res.send('Internal server error')
  }

})

module.exports = router
