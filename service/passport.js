const  JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const passport=require('passport')


let opts={}
const userModel=require('../model/userModel')
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey='waddying'
module.exports=passport=>{
    passport.use(new JwtStrategy(opts,function(jwtPayload,done){
        userModel.findOne({_id:jwtPayload._id},(err,user)=>{
            if(err){
                return done(err,false)
            }
            if(user){
                return done(null, user)
            }else{
                return done (null  , false)
            }
        })
    }))
}