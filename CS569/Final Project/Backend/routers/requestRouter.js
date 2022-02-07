const express = require('express');
const requestRouter = express.Router();
const requestController = require('../controllers/requestController');

requestRouter.post('/',requestController.addrequest);
requestRouter.get('/openrequests',requestController.searchOpenRequests);
requestRouter.get('/closedrequests',requestController.searchClosedRequests);
requestRouter.get('/:request_id',requestController.searchrequestById);
// requestRouter.put('/:request_id', requestController.updaterequest)
requestRouter.put('/status/:request_id', requestController.changeStatus)
requestRouter.put('/comment/:request_id', requestController.addComment)
requestRouter.delete('/:request_id', requestController.deleterequest)



module.exports = requestRouter;