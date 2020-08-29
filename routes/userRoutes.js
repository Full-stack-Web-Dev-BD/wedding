const userRouter=require('express').Router()
const userController=require('../controller/userController')

userRouter.post('/register',userController.registerController)
userRouter.post('/login',userController.loginController)
userRouter.post('/get-user',userController.getUser)
userRouter.post('/update-budget',userController.updateBudget)



module.exports=userRouter