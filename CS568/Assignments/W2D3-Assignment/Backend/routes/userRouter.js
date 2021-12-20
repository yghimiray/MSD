const express = require('express');
const router = express.Router();

const userController = require('../userController');

router.get('/',userController.listAll);
router.get('/:_id', userController.searchById);
router.post('/',userController.save);
router.put('/:_id',userController.update);
router.delete('/:_id',userController.deleteById);
router.post('/login',userController.login);

module.exports=router;