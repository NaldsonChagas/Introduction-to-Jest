const product = require('../../database/models/product')

module.exports = {
  save: async (request, response) => {
    const { title, price, description } = request.body

    try {
      const savedProduct = await product.create({
        title,
        price,
        description
      })
      response.json({ savedProduct })
    } catch (err) {
      response.status(500).json({ message: 'Was not possible save the sended product' })
      throw new Error(err)
    }
  }
}
