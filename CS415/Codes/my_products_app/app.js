const MongoClient = require('mongodb').MongoClient;

let conn = null;
const ManyProducts = [{"product_id": 101, "name": "Apple", "unit-price": 1.09, "quantity": 125},
    {"product_id": 102, "name": "Banana", "unit-price": 0.89, "quantity": 94},
    {"product_id": 103, "name": "Carrot", "unit-price": 1.15, "quantity": 341}]

async function main() {
    conn = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('Connected......');
    const db = conn.db('product-db');
    const collection = db.collection('products');
    addManyProducts(collection,ManyProducts);
    const products = await getProducts(collection);
    products.forEach(product => console.log(product));
    return "Operation Completed";
};


const getProducts = async function (collection) {
    return await collection.find({}).toArray();
};

const addNewProduct = async function (collection, newProduct) {
    return await collection.insertOne(newProduct);
};



const addManyProducts = async function (collection, ManyProducts) {
    return await collection.insertMany(ManyProducts);
};





main()
    .then(console.log)
    .catch(console.error)
    .finally(() => { if (!conn) conn.close(); })