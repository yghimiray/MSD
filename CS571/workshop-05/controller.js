const userCollection = require('./user')

const jwt = require('jsonwebtoken');
const accessTokenSecret = "Yogesh";


exports.signUp = async (req, res, next) => {
    try {
        const user = await userCollection(req.body).save()
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}


exports.searchById = async (req, res, next) => {
    try {
        const id = req.params.id;
        res.status(200).json(await userCollection.findOne({ _id: id }))
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await userCollection.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
                const accessToken = jwt.sign({ email: user.email, phone: user.phone }, accessTokenSecret);
                // const now = Date();
                // await userCollection.updateOne({ username: req.body.username }, { $push: {prev_location:{Location:"Iowa", time: now}} })
                // await userCollection.updateOne({ email: req.body.email }, { $push: {prev_location:req.body.loggedLocation} })
                user.prev_location.push(req.body.loggedLocation)
                res.status(200).json({ accessToken });
                console.log(user)
        } else {
            res.status(200).json({ 'error': 'username or password invalid' });
        }
    } catch (error) {
        next(error);
    }
}



exports.updateLogs = async (req, res, next) => {
    try {
        const id = req.params.id
        const thisLocation = req.body;
        res.status(200).json(await userCollection.updateOne({ _id: id }, { $push: {prev_location:thisLocation} }))
    } catch (error) {
        next(error)
    }
}


