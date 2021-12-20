const { ObjectId } = require('bson');
const Movie = require('./movieClass');

exports.save = async (req,res,next) =>{
try{
    const movie = req.body;
    // res.json({name: "OK"})
    res.status(200).json(await new Movie(movie._id,movie.name, movie.rating, movie.genre,movie.id).save())
}catch(error){
    next(error);
}
}

exports.listAll = async (req,res,next) =>{
    try{
        res.status(200).json(await Movie.listAll().toArray());
    }catch(error){
        next(error);
    }
    }

exports.searchById = async (req,res,next)=>{
    try{
        const id = req.params.id
        res.status(200).json(await Movie.searchById(id))
    }catch(error){
        next(error)
    }
}


        
exports.update = async (req,res,next) =>{
    try{
        const id = req.params.id
        const movie = req.body;
        const updatedMovie = new Movie(movie._id, movie.name, movie.rating, movie.genre,id);
        res.status(200).json(await updatedMovie.update(id));
    }catch(error){
        next(error);
    }
    };


    
exports.deleteById = async (req,res,next) =>{
    try{
        const id = req.params.id
        await Movie.deleteById(id)
        console.log("Deleted Successfully")
        res.status(200).end();
    }catch(error){
        next(error);
    }
    };