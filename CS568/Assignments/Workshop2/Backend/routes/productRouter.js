const express = require('express');
const router = express.Router();
const productController = require('../productController');

router.post('/',productController.save)
router.get('/',productController.listAll)
router.get('/:PID',productController.searchByPID)
router.put('/:PID',productController.update)
router.delete('/:PID',productController.deleteByPID)
// router.patch('/:PID/review',productController.addReview)

module.exports = router;
