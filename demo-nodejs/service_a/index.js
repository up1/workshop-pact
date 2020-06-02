const client = require('./service')

client.fetchUser('demo user').then(
  response => {
    console.log(response)
  },
  error => {
    console.error(error)
  }
)