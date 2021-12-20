const { ObjectId } = require('bson');
const Post = require('./postClass');

exports.save = async(req,res,next)=>{
    try{
        const post = req.body;
        res.status(200).json(await new Post(post._id,post.PID,post.head,post.description).save())
    }catch(error){
        next(error)
    }
}

exports.listAll = async(req, res,next)=>{
    try{
        res.status(200).json(await Post.listAll().toArray());
    }catch(error){
        next(error)
    }
}

exports.searchByPID = async(req, res,next)=>{
    try{
        const PID = req.params.PID;
        console.log(PID)
        res.status(200).json(await Post.searchByPID(PID))
    }catch(error){
        next(error)
    }
}