const customerCollection = require('../models/customer');
const jwt = require('jsonwebtoken');
// const customer = require('../models/customer');
const accessTokenSecret = "Brilliance";
const nodemailer = require('nodemailer');


exports.createCustomer = async (req, res, next) => {
    try {
        const customer = await customerCollection(req.body).save()
        res.status(200).json(customer);
    } catch (error) {
        next(error)
    }
}

exports.searchById = async (req, res, next) => {
    try {
        const id = req.params.id;
        res.status(200).json(await customerCollection.findOne({ _id: id }))
    } catch (error) {
        next(error)
    }
}

exports.searchByUsername = async (req, res, next) => {
    try {
        const username = req.params.username;
        const customer = await customerCollection.findOne({ username: username })
        console.log(customer)
        res.status(200).json(customer)
    } catch (error) {
        next({error:"not found"})
    }
}

exports.update = async (req, res, next) => {
    try {
        const username = req.params.username
        const customer = req.body;
        res.status(200).json(await customerCollection.updateOne({ username: username }, { $set: customer }))
    } catch (error) {
        next(error)
    }
}


exports.login = async (req, res, next) => {
    try {
        const customer = await customerCollection.findOne({ username: req.body.username, password: req.body.password });
        if (customer) {
            if (!customer.active) {
                res.status(200).json({ 'error': 'This customer is deactivated. Please contact the user administrator.' });
            } else {
                const accessToken = jwt.sign({ username: customer.username, email: customer.email }, accessTokenSecret);
                res.status(200).json({ accessToken });
            }
        } else {
            res.status(200).json({ 'error': 'username or password invalid' });
        }
    } catch (error) {
        next(error);
    }
}

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        username:'brillancemsd@gmail.com',
        password:"brillance$123"
    }

});
let mailOptions = {
    from:'brillancemsd@gmail.com',
    to:'jrkhatri84@gmail.com',
    subject:'Order status',
    text:'Your order is ready to pick up'
}

exports.addOrder = async (req, res, next) =>{
    try{ 
        console.log("i am in add orders customers controllers")
       let customerOrder = req.body;
        // customerOrder._oId = 101;
        console.log(req.params.cId)
        customerOrder.status = "Pending"

        const customer = await customerCollection.findOne({username :req.params.cId})
       
        if(customer){

            console.log(customer)
            console.log(req.body)
           let x = await customerCollection.updateOne(
                {username : req.params.cId},
                {$push : {order : customerOrder}})
                transporter.sendMail(mailOptions, function(error, info){
                    console.log("transporter")
                    if(error){
                        console.log(error);
                    } else{
                        console.log('Email sent:'+info.response)
                    }
                });
            
                res.status(200).json({status : "Order Added successfully", message:"Pending"})
        }else{
            res.json({error: "Farmer does not exists"})
        }
    }catch(error){
        next(error)
    }
}
exports.getOrder = async (req, res, next) =>{
    try{
        console.log("I am in customers getproducts")
        const findFarmer = await customerCollection.findOne({username : req.params.username})
        console.log(findFarmer.order)
        res.status(200).json(findFarmer.order)
    } catch (error){
        next(error)
    }
}
exports.getCart = async (req, res, next) =>{
    try{
        console.log("I am in customers getcart")
        const findCustomer = await customerCollection.findOne({username : req.params.username})
        console.log(findCustomer.cart)
        res.status(200).json(findCustomer.cart)
    } catch (error){
        next(error)
    }
}

exports.addToCart = async (req, res, next) =>{
    try{ 
        console.log("i am in add to cart customers controllers")
       let customerOrder = req.body;
        // customerOrder._oId = 101;
        console.log(req.params.username)
        console.log(req.body)
       // customerOrder.status = "Pending"

        const customer = await customerCollection.findOne({username :req.params.username})
       
        if(customer){

            console.log(customer)
            console.log(req.body)
           let x = await customerCollection.updateOne(
                {username : req.params.username},
                {$push : {cart : customerOrder}})
                transporter.sendMail(mailOptions, function(error, info){
                    console.log("transporter hello")
                    if(error){
                        console.log(error);
                    } else{
                        console.log('Email sent:'+info.response)
                    }
                });
            
                res.status(200).json({status : "Order Added successfully", message:"Pending"})
        }else{
            res.json({error: "Farmer does not exists"})
        }
    }catch(error){
        next(error)
    }
}


exports.search = async (req, res, next) => {
    try {
        res.status(200).json(await customerCollection.find())
    } catch (error) {
        next(error)
    }
}
