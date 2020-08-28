const express= require('express')
const PORT = process.env.PORT|| 5000
const mongoose=require('mongoose')
const morgan =require('morgan')
const cors = require('cors')
const app = express()

// all router
const userRouter=require('./routes/userRoutes')
const guestRoutes=require('./routes/guestRoutes')




app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


// use of routes 
app.use(userRouter)
app.use(guestRoutes)





mongoose.connect('mongodb://localhost/waddying',{useUnifiedTopology:true,useFindAndModify:true,useNewUrlParser:true},(err)=>{
    if(err){
        return console.log('Database connection faild ')
    }
    console.log('Database connected !')
})

app.listen(PORT,()=>{
    console.log('Server started on :',PORT)
})