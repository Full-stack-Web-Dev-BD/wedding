const mongoose=require('mongoose')
const Schema=mongoose.Schema

const guestSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    groupFamily:String,
    status:String,
    
})
const guestModel=mongoose.model('guestModel',guestSchema)
module.exports=guestModel