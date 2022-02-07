const express = require('express');
const offerRouter = express.Router();
const offerController = require('../controllers/offerController');

offerRouter.post('/',offerController.addOffer);
offerRouter.get('/openoffers',offerController.searchOpenoffers);
offerRouter.get('/closedoffers',offerController.searchClosedoffers);
offerRouter.get('/:offer_id',offerController.searchOfferById);
// offerRouter.put('/:offer_id', offerController.updateoffer)
// offerRouter.put('/status/:offer_id', offerController.changeStatus)
offerRouter.put('/comment/:offer_id', offerController.addComment)
offerRouter.delete('/:offer_id', offerController.deleteoffer)



module.exports = offerRouter;