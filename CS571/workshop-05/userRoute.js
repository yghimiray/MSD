const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.post('/', userController.signUp)
router.get('/:id', userController.searchById)
router.patch('/:id', userController.updateLogs)
router.post('/login', userController.login)


module.exports = router