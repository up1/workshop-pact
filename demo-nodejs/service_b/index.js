const { server } = require('./service')
server.listen(9002, () => {
  console.log('Servicec B is listening on PORT 9002')
})