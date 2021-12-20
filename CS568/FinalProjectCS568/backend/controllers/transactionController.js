const jwt = require('jsonwebtoken');
const transactionCollection = require ('../models/transaction')
const accessTokenSecret = "Brilliance";

exports.createTransaction = async (req,res,next)=>{
    console.log("i am in transaction")
    console.log(req.body)
    try {
        const transaction = await transactionCollection(req.body).save()
        res.status(200).json(transaction);
    } catch (error) {
        console.log("why**********************")
        next(error)
    }
}

exports.getAll = async (req,res,next)=>{
    try {
        const allTransactions = await transactionCollection.find()
        res.status(200).json(allTransactions);
    } catch (error) {
        next(error)
    }
}


exports.getByBillNo = async (req,res,next)=>{
    try {
        const billNo = req.params.billNo;
        const transaction = await transactionCollection.findOne({ billNo: billNo })
        res.status(200).json(transaction)
    } catch (error) {
        next({error:"not found"})
}
}
