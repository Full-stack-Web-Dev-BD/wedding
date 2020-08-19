const privateRouter= require('express').Router()


privateRouter.get('/getInfo',(req,res)=>{
    res.json({massage:'Hello'})
})


module.exports=privateRouter