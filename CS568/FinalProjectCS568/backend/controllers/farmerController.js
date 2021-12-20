const jwt = require('jsonwebtoken');
const farmerCollection = require ('../models/farmer')
const accessTokenSecret = "Brilliance";
const nodemailer = require('nodemailer');


exports.getAllFarmers = async (req, res, next) => {
    try{
        const allFarmers = await farmerCollection.find();
        res.status(200).json(allFarmers);
    } catch(error){
        next(error)
    }
}

exports.getProducts = async (req, res, next) =>{
    try{
        console.log("I am in getproducts")
        const findFarmer = await farmerCollection.findOne({_id : req.params.id})
        console.log(findFarmer.products)
        res.status(200).json(findFarmer.products)
    } catch (error){
        next(error)
    }
}



exports.createFarmer=async(req,res,next)=>{
    try {
        const farmer = await farmerCollection(req.body).save()
        res.status(200).json(farmer);
    } catch (error) {
        next(error)
    }
}


exports.searchByUsername = async (req, res, next) => {
    try {
        const username = req.params.username;
        const farmer = await farmerCollection.findOne({ username: username })
        console.log(farmer)
        res.status(200).json(farmer)
    } catch (error) {
        next({error:"not found"})
    }
}

exports.update = async (req, res, next) => {
    try {
        const username = req.params.username
        const farmer = req.body;
        res.status(200).json(await farmerCollection.updateOne({ username: username }, { $set: farmer }))
    } catch (error) {
        next(error)
    }
}


let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'junkjrk@hotmail.com',
        pass:'408khatri804'
    }

});
let mailOptions = {
    from:'junkjrk@hotmail.com',
    to:'jrkhatri84@gmail.com',
    subject:'Order status',
    text:'Your order is ready to pick up'
}

exports.addOrders = async (req, res, next) =>{
    try{ 
        console.log("i am in add orders controllers")
       let customerOrder = req.body;
        // customerOrder._oId = orderId++;
        customerOrder.status = "Pending"

        const farmer = await farmerCollection.findOne({_id :req.params.id})
       
        if(farmer){
            console.log("i am farmer")
           let x = await farmerCollection.updateOne(
                {_id : req.params.id},
                {$push : {orders : customerOrder}})
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

exports.login = async (req, res, next) => {
    
    try {
        const farmer = await farmerCollection.findOne({ username: req.body.username, password: req.body.password });
        console.log(farmer)
        if (farmer) {
            if (!farmer.active) {
                res.status(200).json({ 'error': 'This farmer is deactivated. Please contact the user administrator.' });
            } else {
                const accessToken = jwt.sign({ username: farmer.username, email: farmer.email }, accessTokenSecret);
                res.status(200).json({ accessToken });
            }
        } else {
            res.status(200).json({ 'error': 'username or password invalid' });
        }
    } catch (error) {
        next(error);
    }
}

exports.updateRating = async(req, res, next) => {
    console.log(req.params.fId)
    const rating = req.body.selected
    console.log(rating)
    let farmer;
    try{
        if(rating == "excellent"){
         farmer = await farmerCollection.updateOne({_id: req.params.fId}, {$inc: {rating:1}})
         res.status(200).json({status:"Rating added"})
        } else if( rating == "bad"){
            farmer = await farmerCollection.updateOne({_id: req.params.fId}, {$inc: {rating:-1}})
            res.status(200).json({status:"Rating deducted"})
        }
         res.status(201).json({status:"Rating unkonow"})

        }catch (error){
            next(error)

        }

    }


