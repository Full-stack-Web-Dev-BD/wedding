const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
    wDate:String,
    registerDate:String,
    budget:{}
})
module.exports= suserModel=mongoose.model('userModel',userSchema)