const AWS = require('aws-sdk');
const sns = new AWS.SNS({region: 'us-east-1'});
AWS.config.update({region: 'us-east-1'});


const userCollection = require('../models/user')
const ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken');
const accessTokenSecret = "Yogesh";
const bcrypt = require('bcrypt')

exports.signUp = async (req, res, next) => {
    try {
        console.log(req.body)
        const exist = await userCollection.findOne({ username: req.body.username })
        if(exist){
            res.json({ error :0} );
        }else{
            const password = await bcrypt.hash(req.body.password, 10) //  generally saltRounds =10
            const user = await userCollection({ ...req.body, password }).save()
            
            const token = jwt.sign({ 
                username: user.username, 
                role: user.role 
            }, accessTokenSecret);
            res.status(200).json({ success:1, token, user });
        }
    } catch (error) {
        next(error)
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await userCollection.findOne({ username: req.body.username })
        const match = await bcrypt.compare(req.body.password, user.password)
        // console.log(match)
        if (!match) {
            throw new Error('Invalid Access')
        } else {
            const token = jwt.sign({ 
                username: user.username, 
                role: user.role 
            }, accessTokenSecret);
            res.status(200).json({ success:1, token, user });
        }
    } catch (error) {
        next(error);
    }
}

exports.authorize = (req, res, next)=>{
    try{
        const header = req.headers.authorization 
        if(!header){
            res.json({error:"Unauthorized"})
        }
        const encr_token = header.split(' ')[1]
        if (encr_token){
            const token = jwt.verify(encr_token, accessTokenSecret, (err, user) => {
                req.user = user;
                req.token= token;
                next()
            })
        }else{
            res.json({error:"Unauthorized"})
        }
    }catch (error){
        next(error)
    }
}

exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ "error": "Unauthorized" });
    }
}




exports.updateUser = async (req, res, next) => {
    try {
        const user_name = req.params.username;
        console.log(req.body)
        const {fullname,email,password, role, userRole} = req.body;

        if(userRole !== 'admin'){
        const params = {
            Message: `FullName:${fullname}, Email:${email},Password: ${password}, Role: ${role}`, 
            Subject: 'Please update my user account',
            TopicArn: 'arn:aws:sns:us-east-1:741828159356:final_project'
          };
          sns.publish(params,function(err,data){
              if(err) console.log(err);
              else console.log(data)
          })
        }else{
            const hashPassword = await bcrypt.hash(req.body.password, 10) //  generally saltRounds =10
            res.status(200).json(await userCollection.updateOne({ username: user_name }, { 
                $set: {
                fullname,
                password: hashPassword,
                email,
                role   
                } }))
        }

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


exports.searchUserByUserame = async (req, res, next) => {
    try {
        const username = req.params.username;
        res.status(200).json(await userCollection.findOne({ username: username }))
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

