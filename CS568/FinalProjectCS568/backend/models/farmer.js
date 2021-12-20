
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
    _id:{type:String, required: true},
    farm:{type:String, required: true},
    address:{type:String, required: true},
    username:{type:String, required: true},
    password:{type:String, required: true},
    email:{type:String, required: true},
    active:{type:Boolean},
    products:[{_pId:String, name:String, category:String, price:Number, quantity:Number}],
    orders:[{_oId:String, cId:String, date:String, items:[{name:String, quantity:Number}], status:String}],
    history:[{type:Object}],
    rating:{type:Number}

})

module.exports = mongoose.model('farmer', farmerSchema)