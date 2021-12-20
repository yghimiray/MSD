const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.post('/signup', userController.signUp)
router.get('/logs',userController.authorize, userController.findLogs)
router.post('/login', userController.login)


module.exports = router