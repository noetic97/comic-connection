var router = require('express').Router();
var Users = require('./Models/User.js')

router.post('/users', User.signUp )
router.get()

module.exports = router
