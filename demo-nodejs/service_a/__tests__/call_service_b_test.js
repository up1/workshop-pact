const nock = require('nock')
const API_PORT = 8081
const { fetchUser } = require('../service')
const API_HOST = `http://localhost:${API_PORT}`

describe('Call service B', () => {
  it('Check payload from /user/:name', async () => {
    nock(API_HOST)
      .get('/user/test user')
      .reply(200, {
        user: {
          name: 'test user'
        }
      })

    const response = await fetchUser('test user')
    expect(response.user.name).toEqual('test user')
  })
})