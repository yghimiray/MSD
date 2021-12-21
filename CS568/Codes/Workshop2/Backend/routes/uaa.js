var express = require('express');
var router = express.Router();

 
router.post('/', function(req, res, next) {
    if(req.body.email==='uinan@miu.edu' && req.body.password==='123'){ 
        res.json({token:'jwt_token', status:'success'})
    }else{
        res.json({status:'auth_error'})
    }
});

module.exports = router;
