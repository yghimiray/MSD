const User = require('./userClass');
const jwt = require('jsonwebtoken');
const accessTokenSecret = "Yogesh";

exports.save = async (req,res,next) =>{
try{
    const user = req.body;
    res.status(200).json(await new User(user._id,user.username, user.password, user.role).save())
}catch(error){
    next(error);
}
}

exports.listAll = async (req,res,next) =>{
    try{
        const users = await User.listAll().toArray();
        console.log (users);
        res.status(200).json(await User.listAll().toArray());
    }catch(error){
        next(error);
    }
    }

exports.searchById = async (req,res,next)=>{
    try{
        res.status(200).json(await User.searchById(req.params._id))
    }catch(error){
        next(error)
    }
}


        
exports.update = async (req,res,next) =>{
    try{
        const _id = req.params._id;
        const user = req.body;
        const updatedUser = new User(_id, user.username, user.password, user.role);
        res.status(200).json(await updatedUser.update(_id));
    }catch(error){
        next(error);
    }
    };


    
exports.deleteById = async (req,res,next) =>{
    try{
        
        await User.deleteById(req.params._id)
        console.log("Deleted Successfully")
        res.status(200).end();
    }catch(error){
        next(error);
    }
    };


    exports.login = async (req, res, next)=>{
      try{
        const user = await new User(null, req.body.username, req.body.password, null).login();
            console.log(user)
        if(user){
            const accessToken = jwt.sign({username:user.username, role:user.role},accessTokenSecret);
            // console.log(user.username)
            res.json({accessToken});
        }else{
            res.status(200).json({"error":"Invalid user credentials ! Try again."})
        }
    }catch(err){
      next(err)  
    }
    };