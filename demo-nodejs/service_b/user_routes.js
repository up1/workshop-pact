const router = require('express').Router();
const service = require('./user_service');

router.get("/user/:name", service.getByUser);

module.exports = router;