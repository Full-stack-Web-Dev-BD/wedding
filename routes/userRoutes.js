const userRouter=require('express').Router()
const userController=require('../controller/userController')

userRouter.post('/register',userController.registerController)
userRouter.post('/login',userController.loginController)
module.exports=userRouter