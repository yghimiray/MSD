const express = require('express')
const router = express.Router();
const transactionController = require('../controllers/transactionController')



router.post('/',transactionController.createTransaction)
router.get('/',transactionController.getAll)
router.get('/:billNo',transactionController.getByBillNo)

module.exports = router