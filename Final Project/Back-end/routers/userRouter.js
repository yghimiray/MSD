const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/',userController.signUp);
userRouter.post('/login',userController.login);
userRouter.get('/',userController.searchAllusers);
userRouter.get('/:username',userController.searchUserByUserame);
// userRouter.use(userController.authorizeAdmin)
userRouter.put('/:username', userController.updateUser)
userRouter.delete('/:user_id', userController.deleteUser)



module.exports = userRouter;