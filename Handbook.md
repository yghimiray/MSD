# Object
1. To check if the property exists in an object or not:

        if (propertyName in obj) 
2. To read a property of an object or assign a property:

        obj[propName] or obj.propName

//////////////////////////////////////////////////////////////////////////////////
# Working with Back-end  server 
1. // Install express generator or can start with npm init (manual process)   
npm i -g express-generator 
2. next time you can start with :- express nameOfYourApp(backend)  
express backend
3. Install package-lock.json:- 
cd backend
npm install
npm i  mongodb jsonwebtoken mongoose cors bcrypt nodemon

4. Mongoose Schema // For Example users collection
   const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Never use _id in the schema, it will throw an error
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:String, required:true},
    location:{
        zipcode:{type:String},
        city:{type:String},
        state:{type:String}
    },
    logs:[{timeStamp:Number, city: String, state: String}]
})

module.exports = mongoose.model('user',userSchema)


5. Mongoose Database 
    
    const mongoose = require('mongoose');
    const dbUrl = 'mongodb://localhost:27017';

const mongoConnect = (callback)=>{
    mongoose.connect(dbUrl,{
        useNewUrlparser:true,
        useUnifiedTopology:true,
        dbName :'cs571'
    })
    .then(client=>{
        console.log({status:"Connected....."})
        callback();
    })
    .catch(error=>{
        handleError(error)
    })
}

exports.mongoConnect=mongoConnect;

// This can be done in app.js directly too. At that time we need to do app.listen()
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/users')


6. Controller

const customerCollection = require('../models/customer');
const jwt = require('jsonwebtoken');
const accessTokenSecret = "Brilliance";
const bcrypt = require('bcrypt');


exports.createCustomer = async (req, res, next) => {
    try {
        // to check the emails duplicates
        // const exists = await customerCollection.findOne({ email: req.body.email })
        // if(exists) throw new Error ('USer already exists)

        const password = await bcrypt.hash(req.body.password, 10) //  generally saltRounds =10
        const customer = await customerCollection({...req.body, password}).save()
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


exports.update = async (req, res, next) => {
    try {
        const id = req.params.id
        const customer = req.body;
        res.status(200).json(await customerCollection.updateOne({ _id: id }, { $set: customer }))
         // res.status(200).json(await userCollection.updateOne({ _id: id }, { $push: {nameOfArray:thisItem} }))
    } catch (error) {
        next(error)
    }
}


exports.login = async (req, res, next) => {
    try {
        // if the password is hashed , do this
        // const user = await userCollection.findOne({ email: req.body.email });
        // const match = bcrypt.compare(req.body.password, user.password)
        // if (!match) {
            // throw new Error('Invalid Access')
        // } else { do this

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

exports.authorize = (req, res, next)=>{
    try{
        const header = req.header.authorization 
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
    }catch (e){
        next(e)
    }
}


<!-- exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            console.log(user);
            if (err) {
                return res.status(403).json({ "error": "Forbidden" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ "error": "Unauthorized" });
    }
} -->



exports.search = async (req, res, next) => {
    try {
        res.status(200).json(await customerCollection.find())
    } catch (error) {
        next(error)
    }
}


7. Router

const express = require('express');
const router = express.Router();

const userController = require('../userController');

router.get('/',userController.listAll);
router.get('/:_id', userController.searchById);
router.post('/',userController.save);
router.put('/:_id',userController.update);
router.delete('/:_id',userController.deleteById);
router.post('/login',userController.login);
router.use(userController.authorize)

module.exports=router;



8. app.js

const express = require('express');
const path = require('path');
const userRouter = require('./userRoute')
const cors = require('cors');
const mongoConnect = require('./database').mongoConnect

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoConnect(()=>{
  app.listen(3000, ()=>console.log("Running 3000"))
})
















//////////////////////////////////////////////////////////////////////////////////
# MongoDB Database Creation 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    // MongoClient.connect('mongodb+srv://yogesh:<123>@cluster0.igdip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(client => {
            _db = client.db('cs568');
            callback();
        })
        .catch(err => console.log(err));
}

const getDB = () => {
    if (_db) {
        return _db;
    }
    throw new Error("No Database Found !")
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;




//////////////////////////////////////////////////////////////////////////////////
## In Class Creation (model)

### Using plain MongoDB
const { ObjectID } = require('mongodb').ObjectId; to used the ObjectID in class
const getDB = require('./mongoDb').getDB;
// const collection = getDB().collection('nameOfCollection') // This doesn't work.

module.exports = class nameOfClass {
    constructor(_id, name, rating, genre) {
        this._id = _id;
        this.name = name;
        this.rating = rating;
        this.genre = genre
    }

    save() {
        return getDB().collection('nameOfCollection').insertOne(this);
    }

    static listAll() {
        return getDB().collection('nameOfCollection').find();
    }

    static searchById(_id) {
        return getDB().collection('nameOfCollection').findOne({ _id: _id});
    }


    update(_id) {
        return getDB().collection('nameOfCollection').updateOne({ _id: _id }, { $set: { name: this.name, rating: this.rating, genre: this.genre } });
    }

    static deleteById(_id) {
        return getDB().collection('nameOfCollection').deleteOne({ _id: _id });
    }

};

  login() {
        return getDB().collection('nameOfCollection').findOne({username: this.username, password : this.password });
    }



//////////////////////////////////////////////////////////////////////////////////
## Creation of controller

### Using plain MongoDB
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
        res.status(200).json(await User.listAll().toArray());
    }catch(error){
        next(error);
    }
    }

exports.searchById = async (req,res,next)=>{
    try{
        const id = Number(req.params.id); // make sure id is converted to Number if your input is in number.
        const id = req.params.key // Since _id is automatic, add one more field "key" and use this key as an id.
        res.status(200).json(await User.searchById(id))
    }catch(error){
        next(error)
    }
}


        
exports.update = async (req,res,next) =>{
    try{
         const id = Number(req.params.id); 
        const user = req.body;
        const updatedUser = new User(user._id, user.username, user.password, user.role, user.id);
        res.status(200).json(await updatedUser.update(id));
    }catch(error){
        next(error);
    }
    };


    
exports.deleteById = async (req,res,next) =>{
    try{
         const id = Number(req.params.id); 
        await User.deleteById(id)
        console.log("Deleted Successfully")
        res.status(200).end();
    }catch(error){
        next(error);
    }
    };


    exports.login = (req, res, next)=>{
      try{
        const user = new User(null, req.body.username, req.body.password, null).login();
        if(user){
            const accessToken = jwt.sign({username:user.username, role:user.role},accessTokenSecret);
            console.log(user.username)
            res.json({accessToken});
        }else{
            res.status(200).json({"error":"Invalid user credentials ! Try again."})
        }
    }catch(err){
      next(err)  
    }
    };

exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            console.log(user);
            if (err) {
                return res.status(403).json({ "error": "Forbidden" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ "error": "Unauthorized" });
    }
}

exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ "error": "Forbidden" });
    }
}

### Using Mongoose
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



### Basic operators for MongoDB server
1. Searching an Array
    Example:  { _id: 1, courses: [ "CS471", "CS571", "CS435" ] }  
    db.col.find({ courses: "CS571" }) // find all documents where courses value contains "CS571"  
    db.col.find({ courses: { $in: ["CS571", "CS471"] } }) // find all documents where courses value contains "CS471" OR "CS571"  
    db.col.find({ courses: { $all: [ "CS571" , "CS471" ] } }) // find all documents where courses value contains "CS471" AND "CS571"  
2. Search with $elemMatch
    Evample  
    { _id: 1, results: [ 1, 2, 5, 10 ] }  
    { _id: 2, results: [ 5, 8, 9, 10 ] }  
    { _id: 3, results: [ 10, 11, 12 ] }  
    db.test.find( { results: { $in: [ 5, 10 ] } } ) // scan results for value n times (accepts only value, no operators). // one value must exist to return the document  
    db.test.find( { results: { $elemMatch: { $gt: 5, $lt: 10 } } } ) // scan results array once: check if there is one value matches the condition _id: 2

3. Update operator  
    1. db.col.updateOne({_id:"1"}, {$set: {"students": 500, "entry": "Aug"} })// update if already exists OR add if not.  
    2. db.col.updateOne({_id:"1"}, { $inc : { "students":1, "exams":1 } })// increase value of student by 1, exams by 1  
    3. db.col.updateOne({_id:"1"}, { $unset : { "program":1 } })// remove the "program" property. Whatever be the value of property, assign 1 to unset and it works fine.  
    4. db.students.updateOne( { _id: 4, "grades.total": 85 }, { $set: { "grades.$.GPA" : 4 } } ) //grades is an inner array of this object and total & GPA are the properties of the objects inside this grades array. (One Level array)  
    5. ArrayFilters: Mostly applicable at two level arrayed object.
        db.students.updateOne({_id:1},{ $inc: { "grades.$[t].questions.$[q]": 2 } },  
        { arrayFilters: [ { "t.type": "quiz" } , { "q": { $gte: 8 } } ]})

    6. 
//Original Document { "_id" : 1, "a" : [1, 2, 3, 4] }
db.testCol.update({_id:1}, { $set : { "a.2":5 } }) // Update item in Array by INDEX
// output: { "_id" : 1, "a" : [1, 2, 5, 4] }
db.col.update({_id:1}, { $push : { "a": 6 } }) // Add item to Array
// output: { "_id" : 1, "a" : [1, 2, 5, 4, 6] }
db.col.update({_id:1}, { $pop : { "a": 1 } })
// output: { "_id" : 1, "a" : [1, 2, 5, 4] }
db.col.update({_id:1}, { $pop : { "a": -1 } })
// output: { "_id" : 1, "a" : [2, 5, 4] }
db.col.update({_id:1}, { $pushAll : { "a": [7, 8, 9] } })
// output: { "_id" : 1, "a" : [2, 5, 4, 7, 8, 9] }
db.col.update({_id:1}, { $pull : { "a": 5 } }) // Remove item from Array
// output: { "_id" : 1, "a" : [2, 4, 7, 8, 9] }
db.col.update({_id:1}, { $pullAll : { "a": [2, 4, 8] } })
// output: { "_id" : 1, "a" : [7, 9] }
db.col.update({_id:1}, { $addToSet : { "a": 5 } })
// output: { "_id" : 1, "a" : [7, 9, 5] }
db.col.update({_id:1}, { $addToSet : { "a": 5 } })
// output: { "_id" : 1, "a" : [7, 9, 5] }
 








### To clone a new child process from the master process you may use:

    1. const {fork} = require('child_process'); and  
            const fibonacci = require('../fibonacci')   
            -in the controller.js file (Parent file which calls the child-process)
    2. create a separate JS file in which you can make your child_process function Eg: Fibonacci.
    3. Add this at the bottom of the child-process function. 
            
            process.on('message', (msg)=>{    
            process.send(fibonacci(msg)) 
            })
    4. In the function within controller (middleware) add this:

            const childProcess = fork('../fibonacci.js');
            childProcess.send(num)
            childProcess.on('message',fibonacci=>{
            res.end(`Fibonacci is ${fibonacci}`)
            })




//////////////////////////////////////////////////////////////////////////////////
## Creation of router

const express = require('express');
const router = express.Router();

const userController = require('../userController');

router.get('/',userController.listAll);
router.get('/:_id', userController.searchById);
router.post('/',userController.save);
router.put('/:_id',userController.update);
router.delete('/:_id',userController.deleteById);
router.post('/login',userController.login);
router.use(userController.authorize)

module.exports=router;



///////////////////////////////////////////////////////////////////////////////////
## Connecting to Github
Login to github.com
Click New button
Repository Name + Select Public  
Add Readme File  
Add Ignore (Select ActionScript) 
Choose a Licence (Select Apache Licence)
Click Code button
Copy Clonning Code

In VSCode Select the folder where to clone (Open in integrated Terminal)
git clone "Paste the copied clonning code" (Example:- https://github.com/yghimiray/CS568.git)

The cloned folder appears in the VSCode. Select this folder(Open in integrated Terminal)
Inside this folder, there is gitIgnore file, Add node_modules in it to avoid pusihing this folder to git.
make sure all your VSCode folders are inside this cloned folder
git status (check where are you)

git add . (add all files)
git commit -m "Your comments"
git push origin main




/////////////////////////////////////////////////////////////////////////////////////
## Working with React

npm i -g create-react-app  // This will install react globally
next time just create-react-app  (nameOfYourReactApp)
npm i react-router
npm i react-router-dom
npm i axios

If you are using loop iteration to display the elements, we should use "Key" to avoid error in Virtual DOM.
Never edit the parameter itself, copy it and edit the contents of that copy.
Do not use push() in the state, use concat(). Always maintain immutaility of the state. So edit the copy of state.
Use this.setState(copy);
While passing a reference to a function/ method, use arrow function inside {}

Class component should Always override render().
Shortcut to create class component (rcc+tab), functional component (rfc+tab)

In parent component; 
<childComponent   // inside first angular bracket.
key = {},
name={} 
propertyChange={this.propertyChange}
delete={() => { this.nameOfDeleteMethod(id) }}       etc...
>
Any thing between two angular brackets is called "Children" can be accessed in childComponent {this.props.children}
</childComponent>

In child Component;
Name: {this.props.name} 
{this.props.children}
<input type='text' value={this.props.nameOfProperty} name="nameOfProperty"(not in {})  onChange={this.props.propertyChange}/>
<button onClick= {this.props.delete} > Delete  </button> etc...



propertyChange = (id, event) => {
    const result = this.state.nameOfArrayInState.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy[event.target.name] = event.target.value;
        return copy;
      }
      return movie;
    })
    this.setState({ nameOfArrayInState: result })
  }



npm i axios
import axios from 'axios';

In Index.js File:-
axios.defaults.baseURL ="................"
This will help us to avoid typing the baseURL multiple times.


Use <BrowserRouter> after render()return(
import {BrowserRouter} from 'react-router-dom'

Instead of <a href=""> use <Link to = '/' OR to ='/movies' etc.. (any suitable path name)>
import { Link } from 'react-router';

<switch>
<Route exact path= '/' component = {nameOfComponent}>
<Route exact path= '/' component = {nameOfComponent}>
<Route exact path= '/' component = {nameOfComponent}>
</switch>

After we use <BrowserRouter> it creates three components (history, location and match). 
It can be accessed in immediate child only. To use it from children of other level, use
export default withRouter( nameOfComponent)

To push the path of a route this.props.history.push('/farmer-homepage/' + id, {object}) // we can send the object as well.
To read the id from match component {this.props.match.params.id}
To read the object from the corresponding component this.props.location.NameOFObject





# React Native -react through functional component
## React hooks
1. useState()
2. useRef()
3. useEffect()
4. useReducer()
5. useContext()
6. useMemo()
7. Custom Hooks
8. React.memo

### useState ()
const [count, setCount] = useState(0); // Getter and Setter together  
const changeFirstName = ()=> setCount({...count, first: first+1 }); // if only partial properties are changed.  
### useRef ()
        function App() {
        const header = React.useRef();
        const change = () => { header.current.innerHTML = "Bonjour"};
        const changeColor = ()=>{header.current.style.color = "red" };
        return (
        <div>
        <h1 ref={header}>Hello</h1>
        <button onClick={change}>French?</button>
        </div>
        );
        }

### useEffect()
1. It removes the need for componentDidMount , componentDidUpdate and componentWillUnmount and      componentShouldUpdate.
2. It takes 2 arguments: • Callback function AND • Array of dependencies
3. When you return a function from useEffect(), the function will be called before the next render.
4. When we pass an empty array of dependencies, we tell React that useEffect should never be called on every render, this is similar to using componentDidMount and componentWillUnmount.


### useMemo()
1. useMemo will only recompute the memoized value when one of the dependency has changed. It returns a memoized value.
2. const computed = React.useMemo(() => compute(), [counter1]); // dependency is counter1

### Custom Hooks
1. A custom Hook is a function whose name starts with "use" and that may call other Hooks.
2. A custom Hook doesn't need to have a specific signature, we can decide what it takes as arguments, and what it should return. It's just a normal function.

### useReducer()
Use 1. it when your state is complex, otherwise, use useState()
        const reducer = function(state, action) {
        switch (action.type) {
        case "SET_NAME": return { ...state, name: action.payload };
        case "SET_GRADE": return { ...state, grade: action.payload };
        default: return state;
        }
        };
        const [{ name, grade }, dispatch] = React.useReducer(reducer, { name: '', grade: 0 });
        dispatch({ type: "SET_NAME", payload: "Asaad Saad" })
        dispatch({ type: "SET_GRADE", payload: 100 })

### useContext
1. MyCountContext = React.createContext()
2. const [count, setCount] = React.useState(0);  // From provider  
        <MyCountContext.Provider value={{count, setCount}}>  
        // App  
        </MyCountContext.Provider>  

3. const { count, setCount } = React.useContext(MyCountContext) // from consumer  


### React.memo
1. React.memo() is the functional way of creating PureComponent.
2. Sometimes we want a component to only renders when its props are changed.
3. Extend your class component from React.PureComponent OR Wrap your function component with React.memo()





# React Navigation
Install / import  these things:
1. 
expo init myApp  
cd myApp  
npm install @react-navigation/native
2. 
expo install react-native-screens react-native-safe-area-context
3. 
import { NavigationContainer } from '@react-navigation/native';
4. // for stack navigator  
npm install @react-navigation/stack 
// npm install @react-navigation/native-stack 
5. 
expo install react-native-gesture-handler
6. 
import { createStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
7. 
npm install @react-navigation/bottom-tabs
8. 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
9. 
npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
10. 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
11. 
npm install @react-navigation/material-top-tabs react-native-tab-view
12. 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';







## Navigating to a new screen
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button title="Go back" onPress={() => navigation.goBack()} />
       <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ // make navigator common to all screens
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen}  
        options={{ 
            title: 'Overview',
             headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false, // to hide the header while using the nested screens
           headerRight: () => (  // put button at the right to the header
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />

             <TextInput 
            style={styles.searchInput} 
            placeholder='GitHub username' 
            value={user.username}
            autoCapitalize={false} // no capital letters
            autoFocus={true} // give the keyboard immediately
            onChangeText={(text)=>{setUser({...user, username:text})}}
            />
            
          ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<Tab.Screen
          name="HOME"
          component={HomeNavigator}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Ionicons name="md-home" size={24} color="black" />
            ),
          }}
        />


        {/* <ScrollView>
                {data.map(course=><Course key={course.code} {...course}/>)}
            </ScrollView> */}


            <FlatList
            data={data}
            renderItem={({item})=><Course {...item}/>} //Course is the name of a component
            keyExtractor={item=> item.code}
            />



    # Angular
    ## Install the angular CLI
    npm i @angular/cli -g

    ## Add a new angular project
    ng new nameOfProject

    ## Start/run the Angular project
    ng serve
    OR shortcut
    ng s -o

    ## Create a new Component through CLI
    ng generate component nameOfComponent -template -stylesheet --flat --skip-tests
    OR shortcut
    ng g c nameOfComponent -t -s --flat --skip-tests
    
    If you want the component not to render if no changes took place;
    changeDetection : ChangeDetectionStrategy.OnPush

    ## Create Directives
    ng g d nameOfDirective --skip-tests


    ## Create Pipe
    ng g p nameOfPipe --skip-tests

    ## Create Service
    ng g s nameOfService --skip-tests

    ## Create Guard
    ng g guard nameOfGuard --skip-tests

    ## Create Interceptor
    ng g interceptor nameOfInterceptor --skip-tests


    ## Use AJAX in Angular
    In AppModule...
    import {HttpClientModule} from '@angular/common/http';

    In your service
    import {HttpClient} from '@angular/common/http';

    #ngIf
    <div *ngIf = "showDiv else showElse">This is Div-1</div>


    showDiv = true / false
    showElse (or any name) should be an ng-template
    <ng-templage #showElse > This is Div-2 </ng-templage>

    # ngFor
    <li *ngFor = "let name of names" > {{name}} </li>
    names is an array.

    #ngStyle
    To use the CSS formats
    <div [ngStyle] = "{color:'white', background-color: 'blue'}">This is Div-1</div>

    #ngNonBindable
    To deactivate the link of {{}}, incase we need to display {{}} as well

    # While declaring the type in typescript, we can also say
    name !: string, which means name is not empty nor null (Same as name = "")

# @HostBinding('style.color') hostColor !:string
    @HostListener('click', ['$event']) nameOfFunction(){

    }

# to create router, forms
    In app.module.ts
    imports:[
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
    ]
    
    In app.component.ts
    <nav>

    </nav>
    <router-outlet></router-outlet>

