const {ObjectId} =require('mongodb').ObjectId;
const getDB = require('./mongoDB').getDB;


module.exports = class Product {
    constructor(_id, PID, name, price,review=[],rating=0) {
        this._id = _id;
        this.PID=PID;
        this.name = name;
        this.price = price;
        this.review=review;
        this.rating=rating
    }

    save(){
        return getDB().collection('products').insertOne(this);
    }

    static listAll() {
        return getDB().collection('products').find();
    }

    static searchByPID(PID){
        return getDB().collection('products').findOne({PID:PID})
    }

    update(PID){
        return getDB().collection('products').updateOne({PID:PID},{$set:{name:this.name, price:this.price,review:this.review,rating:this.rating}})
     }

    static deleteByPID(PID){
        return getDB().collection('products').deleteOne({PID:PID})
    }

    static addReview(PID,review){
        const prod = getDB().collection('products').findOne({PID:PID});
        return prod.review.insertOne(review);
    }



}

