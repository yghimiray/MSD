const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/',userController.signUp);
userRouter.post('/login',userController.login);
userRouter.get('/',userController.searchAllusers);
userRouter.use(userController.authorize)
userRouter.put('/:user_id', userController.updateUser)
userRouter.put('/pasword/:user_id', userController.changePassword)
userRouter.delete('/:user_id', userController.deleteUser)



module.exports = userRouter;