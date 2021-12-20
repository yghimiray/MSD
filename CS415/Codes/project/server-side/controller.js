const Book = require('./model');

exports.save = async (req,res,next) =>{
try{
    const book = req.body;
    res.status(200).json(await new Book(book._id,book.ISBN,book.title, book.overdue_fee,book.publisher,book.datePublished).save())
}catch(error){
    next(error);
}
}

exports.listAll = async (req,res,next) =>{
    try{
        res.status(200).json(await Book.listAll().toArray());
    }catch(error){
        next(error);
    }
    }

exports.searchById = async (req,res,next)=>{
    try{
        res.status(200).json(await Book.searchById(req.params.bookId))
    }catch(error){
        next(error)
    }
}


    
exports.searchByIndex = async (req,res,next) =>{
    try{
        const searchText = req.params.searchText
        res.status(200).json(await Book.searchByIndex(searchText));
    }catch(error){
        next(error);
    }
    };


    
exports.update = async (req,res,next) =>{
    try{
        const bookId = req.params.bookId;
        const book = req.body;
        const updatedBook = new Book(bookId, book.ISBN, book.title, book.overdue_fee, book.publisher, book.datePublished);
        res.status(200).json(await updatedBook.update());
    }catch(error){
        next(error);
    }
    };


    
exports.deleteById = async (req,res,next) =>{
    try{
        await Book.deleteById(req.params.bookId)
        res.status(200).end();
    }catch(error){
        next(error);
    }
    };