const nock = require('nock')
const API_PORT = 9002
const { fetchUser } = require('../service')
const API_HOST = `http://localhost:${API_PORT}`

describe('Call service B', () => {
  it('Check payload from /user/:name', async () => {
    nock(API_HOST)
      .get('/user/pact')
      .reply(200, {
        user: {
          name: 'pact'
        }
      })

    const response = await fetchUser('pact')
    expect(response.user.name).toEqual('pact')
  })
})