const creditCardModel = require('../model/credit-card')
module.exports = {

  async addNewCreditCard (creditCard) {
    try {
      const result = creditCardModel.addNewCreditCard(creditCard)
      return result
    } catch (error) {
      throw error
    }
  },

  async getUserCreditCards (userId) {
    try {
      const result = creditCardModel.getUserCreditCards(userId)
      return result
    } catch (error) {
      throw error
    }
  }

}