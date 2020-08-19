const validator=require('validator')
module.exports={
    registerValidator(req){
        let err={}
        if(!req.body.name){
            err.name="Name required !"
        }
        
        if(!req.body.wDate){
            err.wDate="Wedding Date required !"
        }
        if(!req.body.email){
            err.email="Email required !"
        }else if( !validator.default.isEmail(req.body.email)){
            err.email="Email not valid !"
        }
        if(!req.body.password){
            err.password="Password required !"
        }
        return{
            isvalid:Object.keys(err).length===0,
            err:err
        }
    },
    loginValidator(req){
        
        let err={}
        if(!req.body.email){
            err.email="Email required !"
        }else if( !validator.default.isEmail(req.body.email)){
            err.email="Email not valid !"
        }
        if(!req.body.password){
            err.password="Password required !"
        }
        return{
            isvalid:Object.keys(err).length===0,
            err:err
        }
    }
}