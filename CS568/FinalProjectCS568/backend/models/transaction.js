const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
fullname: {type:String},
  street: {type:String},
  city: {type:String},
  state: {type:String},
  zip: {type:String},
  cardNo: {type:String},
  cardType: {type:String},
  billNo: {type:String},
  date: {type:String},
  orderId: {type:String},
  customer: {type:String},
  farmerId:{type:String},
  totalAmount: {type:Number}
    
    
})

module.exports = mongoose.model('transaction', transactionSchema)