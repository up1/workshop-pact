const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./user_routes')
const port = 9002;

const init = () => {
    app.use(routes);
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use((_, res, next) => {
      res.header('Content-Type', 'application/json; charset=utf-8')
      next()
    })
    return app.listen(port, () => console.log(`Service B starting on port ${port}...`));
};

init();