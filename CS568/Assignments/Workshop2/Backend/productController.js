const { ObjectId } = require('bson');
const { listAll } = require('./productClass');
const Product = require('./productClass');

exports.save = async (req, res, next) => {
    try {
        const product = req.body;
        res.status(200).json(await new Product(product._id, product.PID, product.name, product.price, product.review, product.rating).save());
    } catch (error) {
        next(error)
    }
}

exports.listAll = async (req, res, next) => {
    try {
        res.status(200).json(await Product.listAll().toArray())
    } catch (error) {
        next(error)
    }
}

exports.searchByPID = async (req, res, next) => {
    try {
        const PID = req.params.PID;
        // console.log(PID)
        res.status(200).json(await Product.searchByPID(PID))
    } catch (error) {
        next(error)
    }
}


exports.update = async (req, res, next) => {
    try {
        const PID = req.params.PID
        const prod = req.body;
        res.status(200).json(await new Product(prod._id, prod.PID, prod.name, prod.price, prod.review, prod.rating).update(PID))
    } catch (error) {
        next(error)
    }
}

exports.deleteByPID = async (req, res, next) => {
    try {
        const PID = req.params.PID
        res.status(200).json(await Product.deleteByPID(PID))
    } catch (error) {
        next(error)
    }
}

exports.addReview = async (req, res, next) => {
    try {
        const PID = req.params.PID
        const review = req.body;
        res.status(200).json(await Product.addReview(PID,review))
    } catch (error) {
        next(error)
    }
}