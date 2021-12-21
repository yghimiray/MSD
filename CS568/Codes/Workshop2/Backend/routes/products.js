var express = require('express');
var router = express.Router();

const products = [{ id: 1, name: 'tp1', price: 5 }, { id: 2, name: 'tp2', price: 6 }]

const products2 = [
    {
        id: 1, name: 'tp1', price: 5, brand: 'apple', model: 'model1',
        reviews: [
            { id: 1, title: 'Awesome Product', description: 'i bought this pr.....' },
            { id: 2, title: 'Bad Product', description: 'do not buy ....' }

        ]
    },
    { id: 2, name: 'tp2', price: 6, brand: 'dell', model: 'model2' ,reviews:[] }]

router.post('/:id/review',(req,res)=>{
    products2[req.params.id-1].reviews.push(req.body);
    res.json({status:'success'})
})

router.get('/', function (req, res, next) {
    if (req.headers.authorization === 'jwt_token') {
        res.json(products)
        return
    }
    res.json({ status: 'auth_error' })
    return
});
router.get('/:id/details', function (req, res, next) {
    if (req.headers.authorization === 'jwt_token') {
        res.json(products2[req.params.id - 1])
    }
    res.json({ status: 'auth_error' })
});

router.put('/products/:id',(req,res)=>{
    products2[req.params.id-1] = req.body;
    res.json({status:'success'})
})

module.exports = router;
