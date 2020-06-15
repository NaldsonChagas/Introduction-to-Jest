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
  })

  it('Sould return bad request', async () => {
    const productToSave = {
      title: '',
      price: null,
      description: null
    }

    const response = await request(app)
      .post('/product')
      .send(productToSave)

    expect(response.statusCode).toEqual(400)
    expect(response.body).toHaveProperty('message')
  })

  it('Should save product without description', async () => {
    const productToSave = {
      title: 'Test product',
      price: 20.0,
      description: ''
    }

    const response = await request(app)
      .post('/product')
      .send(productToSave)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('savedProduct')
  })
})
