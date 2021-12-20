const express = require('express')
const router = express.Router();
const farmerController = require('../controllers/farmerController')

router.post('/login',farmerController.login)
router.post('/',farmerController.createFarmer)
router.get('/', farmerController.getAllFarmers)
router.get('/:username',farmerController.searchByUsername)
router.put('/:username',farmerController.update)
// router.get('/:id', farmerController.getProducts)
router.get('/:id/products', farmerController.getProducts)
router.put('/:fId/feedbacks', farmerController.updateRating)


module.exports = router;