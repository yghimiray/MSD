const express = require('express');
const router = express.Router()
const carController = require('./carController')

router.get('/',carController.searchById);
router.post('/',carController.save);
router.patch('/:id/reserve/:reservation_id',carController.update)
router.delete('/:id/reserve/:reservation_id',carController.delete)

module.exports = router;