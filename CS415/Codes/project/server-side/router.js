const express = require('express');
const router = express.Router();

const bookController = require('./controller');

router.get('/',bookController.listAll);
router.get('/:bookId', bookController.searchById);
router.get('/:searchText',bookController.searchByIndex);
router.post('/',bookController.save);
router.put('/ : bookId',bookController.update);
router.delete('/:bookId',bookController.deleteById);

module.exports=router;