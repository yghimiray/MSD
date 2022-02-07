const userCollection = require('../models/user');
const ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken');
const accessTokenSecret = "Yogesh";
const bcrypt = require('bcrypt')

exports.signUp = async (req, res, next) => {
    try {
        const exist = await userCollection.findOne({ username: req.body.username })
        if(exist){
            throw new Error('User already exists')
        }
        const password = await bcrypt.hash(req.body.password, 10) //  generally saltRounds =10
        const user = await userCollection({ ...req.body, password }).save()
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await userCollection.findOne({ username: req.body.username })
        const match = bcrypt.compare(req.body.password, user.password)
        if (!match) {
            throw new Error('Invalid Access')
        } else {
            const accessToken = jwt.sign({ 
                username: user.username, 
                phone: user.phone 
            }, accessTokenSecret);
            res.status(200).json({ success:1, accessToken, user });
        }
    } catch (error) {
        next(error);
    }
}

exports.authorize = (req, res, next)=>{
    try{
        const header = req.headers.authorization 
        if(!header){
            res.json({error:1})
        }
        const encr_token = header.split(' ')[1]
        if (encr_token){
            const token = jwt.verify(encr_token, accessTokenSecret)
            req.token= token;
            next()
        }else{
            res.json({error:1})
        }
    }catch (error){
        next(error)
    }
}



exports.updateUser = async (req, res, next) => {
    try {
        const user_id = new ObjectId(req.params.user_id);
        const {name,email,phone,address} = req.body;
        res.status(200).json(await userCollection.updateOne({ _id: user_id }, { 
            $set: {
            name,
            email,
            phone,
            address   
            } }))
    } catch (error) {
        next(error)
    }
}


exports.changePassword = async (req, res, next) => {
    try {
        const user_id = new ObjectId(req.params.user_id);
        const {password} = req.body;
        res.status(200).json(await userCollection.updateOne({ _id: user_id }, { 
            $set: {
            password
            } }))
    } catch (error) {
        next(error)
    }
}

exports.searchAllusers = async (req, res, next) => {
    try {
        res.status(200).json(await userCollection.find())
    } catch (error) {
        next(error)
    }
}



exports.deleteUser = async (req, res, next) => {
    try {
        const user_id = new ObjectId(req.params.user_id);
        res.status(200).json(await userCollection.deleteOne({ _id: user_id }))
    } catch (error) {
        next(error)
    }
}

