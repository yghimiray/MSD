const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/',customerController.createCustomer);
router.get('/',customerController.search)
router.get('/:username',customerController.searchByUsername)
router.put('/:username',customerController.update)
router.post('/login',customerController.login);
router.post('/:cId/orders',customerController.addOrder)
router.get('/:username/orders',customerController.getOrder)
router.get('/:username/cart', customerController.getCart)
router.post('/:username/cart', customerController.addToCart)



module.exports = router;