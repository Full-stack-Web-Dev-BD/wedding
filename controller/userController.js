const userValidator=require('../validator/userValidator')
const userModel=require("../model/userModel")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


module.exports={
    registerController(req,res){
        let verify =userValidator.registerValidator(req)
        if(!verify.isvalid){
            res.status(400).json(verify.err)
        }
        userModel.findOne({email:req.body.email})
        .then(user=>{
            if(user){
                return res.status(400).json({massage:"User  existing"})
            }
            bcrypt.hash(req.body.password,13,(err,hash)=>{
                if(err){
                    return res.status(500).json({massage:"Eerver Error"})
                }
                new userModel({
                    name:req.body.name,
                    email:req.body.email,
                    password:hash,
                    wDate:req.body.wDate,
                    registerDate:new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate()
                }).save()
                .then(user=>{
                    console.log(user,'registered')
                    res.status(200).json({massage:"Registered Success !"})
                })
                .catch(err=>{
                    console.log(err)
                    res.status(500).json({massage:'Server error occurd !'})
                })
            })
        })
    },
    loginController(req,res){
        let verify=userValidator.loginValidator(req)
        if(!verify.isvalid){
            return res.status(400).json(verify.err)
        }
        userModel.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(404).json({massage:"User not find !!"})
            }
            bcrypt.compare(req.body.password,user.password,(err,success)=>{
                if(err){
                    return res.status(500).json({massage:"Server error occurd "})
                }
                if(!success){
                    return res.status(400).json({massage:"Password did not match !"})
                }
                let token= jwt.sign(
                    {
                        name:user.name,
                        email:user.email
                    },
                    'waddying',
                    {
                        expiresIn:'4h'
                    }
                )
                res.status(200).json(token)
            })
            
        })
    },
    getUser(req,res){
        console.log(req.body)
        userModel.findOne({email:req.body.email})
        .then(user=>{
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({massage:"Server error occurd !"})
        })
    }
}