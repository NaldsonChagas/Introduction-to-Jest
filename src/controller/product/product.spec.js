const request = require('supertest')
const app = require('../../server/server')

describe('POST /product', () => {
  it('Should save complete product', async () => {
    const productToSave = {
      title: 'Test product',
      price: 20.0,
      description: 'An optional description of my product'
    }

    const response = await request(app)
      .post('/product')
      .send(productToSave)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('savedProduct')

    console.log(response.body)
  })
})
