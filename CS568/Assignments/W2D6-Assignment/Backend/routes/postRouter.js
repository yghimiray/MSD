const express = require('express');
const router = express.Router();
const postController = require('../postController');

router.post('/',postController.save)
router.get('/',postController.listAll);
router.get('/:PID',postController.searchByPID)


module.exports = router;
