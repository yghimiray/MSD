const MongoClient = require('mongodb').MongoClient;

let conn = null;

async function main() {
    conn = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('Connected......');
    const db = conn.db('library-db');
    const collection = db.collection('books');

    const books = await getBooks(collection);
    books.forEach(book => console.log(book));
    return "Operation Completed";
};


const getBooks = async function (collection) {
    return await collection.find({}).toArray();
};




main()
    .then(console.log)
    .catch(console.error)
    .finally(() => { if (!conn) conn.close(); })