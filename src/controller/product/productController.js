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
    } catch (e) {
      if (!title || !price || description === null) {
        response.status(400).json({ message: 'Invalid product data' })
      } else {
        response.status(500).json({ message: 'Was not possible complete your request' })
      }
    }
  }
}
