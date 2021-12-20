const express = require('express');
const router = express.Router();

const movieController = require('../movieController');

router.get('/',movieController.listAll);
router.get('/:id', movieController.searchById);
router.post('/',movieController.save);
router.put('/:id',movieController.update);
router.delete('/:id',movieController.deleteById);

module.exports=router;