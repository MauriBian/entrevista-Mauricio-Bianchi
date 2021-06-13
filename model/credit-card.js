const { addNewCreditCard } = require('../controllers/credit-card')
const { mongoose } = require('./db')

const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  cardToken: String,
  brandType: String,
  maskedNumber: String,
  primary: Boolean,
})

const Model = mongoose.model('CreditCard', schema)

module.exports = {

  async addNewCreditCard ({userId, cardToken, brandType, maskedNumber}) {
    try {
      const creditCard = {
        _id: new mongoose.Types.ObjectId(),
        userId,
        cardToken,
        brandType,
        maskedNumber,
        primary: false
      }

      const userCreditCards = await Model.find({
        userId
      })

      if (userCreditCards.length <= 0) {
        creditCard.primary = true
      }

      const model = new Model(creditCard)
      await model.save()

      return 'Credit card added'
  
    } catch (error) {
      throw new Error(error)
    }
  }
  
}