const userCollection = require('./user')

const jwt = require('jsonwebtoken');
const accessTokenSecret = "Yogesh";


exports.signUp = async (req, res, next) => {
    try {
        const exists = await userCollection.findOne({ email: req.body.email })
        if (exists) {
            throw new Error('USer already exists')
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
        let diff_location = false;
        const user = await userCollection.findOne({ email: req.body.email })
        .select({logs:{$slice:-1},location:0});
        const match = bcrypt.compare(req.body.password, user.password)
        if (!match) {
            throw new Error('Invalid Access')
        } else {
            const accessToken = jwt.sign({ email: user.email, phone: user.phone }, accessTokenSecret);
            const update = await userCollection.updateOne({ email: req.body.email }, {
                $push: {
                    logs: {
                        timeStamp: Date.now(),
                        city: req.body.city,
                        state: req.body.region
                    }
                }
            })
            if (req.body.city !== user.logs[0].city || req.body.state !== user.logs[0].state) {
                diff_location = true;
            }
            res.status(200).json({ success:1, accessToken, diff_location });
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
    }catch (e){
        next(e)
    }
}



exports.findLogs = async (req, res, next) =>{
    try{
        const user = await userCollection.findOne({ email: req.token.email })
        .select({logs:{$slice:-10},email:0, phone:0, location:0, password:0});
        res.json({logs: user.logs})

    } catch (err){
        next(err)
    }
}