import React, { useState } from 'react'
import Nav from '../Navbar/Nav'
import './login.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const Register = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [wDate, setWDate] = useState('')
    const [name, setName] = useState('')
    const [err, setErr] = useState({})

    const submitHandler=()=>{
        Axios.post('/register',{name:name,email:email,wDate:wDate,password:password})
        .then(res=>{
            console.log(res.data)
            window.location.href='/login'
        })
        .catch(err=>{
            console.log(err.response.data)
            setErr(err.response.data)
        })
    }

    return (
        <div style={{overflow:'hidden'}}>
            <Nav baseUrl="/"/>
            <div className="slider">
                <img src={require('../../img/slider.png')}/>
                <div className="container">
                    <div className="sliderContent">
                        <h2>the simple way to plan your wedding </h2>
                        <p>Set your budget and manage everything from home </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 offset-md-3 ">
                <div className="col-md-8 offset-md-2 loginPage">
                    <h4>Register Here</h4>
                    <div className="wInputGroup">
                        <p><i className="fa fa-heart"></i> Couple Name</p>
                        <input onChange={e=>{setName(e.target.value)}} type="text" />
                    </div>
                    <div className="wInputGroup">
                        <p><i className="fa fa-heart"></i> Wedding Date</p>
                        <input onChange={e=>{setWDate(e.target.value)}} type="date" />
                    </div>
                    <div className="wInputGroup">
                        <p><i className="fa fa-heart"></i> Email</p>
                        <input onChange={event=>{setEmail(event.target.value)}} type="email" />
                    </div>
                    <div className="wInputGroup">
                        <p><i className="fa fa-heart"></i> Password</p>
                        <input  onChange={event=>{setPassword(event.target.value)}} type="password" />
                    </div>

                    <div className="mb-3">
                        
                        {
                            err.massage?
                            <p className="text-danger m-0"> {err.massage} </p>:''
                        }
                        {
                            err.name?
                            <p className="text-danger m-0"> {err.name} </p>:''
                        }
                        
                        {
                            err.wDate?
                            <p className="text-danger m-0"> {err.wDate} </p>:''
                        }
                        {
                            err.email?
                            <p className="text-danger m-0"> {err.email} </p>:''
                        }
                        {
                            err.password?
                            <p className="text-danger m-0"> {err.password} </p>:''
                        }
                    </div>
                    
                    <button onClick={()=>submitHandler()} className="btn  wBtn">Register</button>
                    <p style={{color:'#9E9E9E', marginTop:'40px'}}>
                        Not Registerd Yet ?
                        <Link to='/login'> Go to Register  Page</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Register

// name , e-mail, password , wedding date f
