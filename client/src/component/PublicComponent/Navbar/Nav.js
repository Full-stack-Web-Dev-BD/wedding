import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = ({url,baseUrl}) => {
    console.log(url)
    return (
        <div className="dbHeader">
            <div className="dbhLogo">
                <img src={require('../../img/logo.png')} />
            </div>
            <div className="dbMenu">
                <ul>
                    <a href={`${baseUrl}#incio`}><li>Incio</li></a>
                    <a href={`${baseUrl}#pricing`}><li>Pricing</li></a>
                    <a href={`${baseUrl}#realWeddying`}><li>Real Weddings</li></a>
                    <a href={`${baseUrl}about`}><li>About Us</li></a>
                </ul>
            </div>
            <div className="dbProfile">
                <ul className="signupMenu" >
                    <Link to='/login'><li><i className="fa fa-sign-out-alt"></i> <span>Login</span></li></Link>
                    <Link to='/register'><li><i className="far fa-heart"> </i> <span>Sign up</span></li></Link>
                </ul>
            </div>
        </div>
    )
}
export default Nav