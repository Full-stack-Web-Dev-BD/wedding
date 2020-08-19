import React from 'react'
import {Link} from 'react-router-dom'
const DashboardHeader = ({url}) => {
    console.log(url)
    return (
        <div className="dbHeader">      
            <div className="dbhLogo">
                <img src={require('../../img/logo.png')} />
            </div>
            <div className="dbMenu">
                <ul>
                    <li>Inicio</li>
                    <li>Pricing</li>
                    <li>Real Weddings</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="dbProfile">
                <div className="pImg">
                    <img src={require('../../img/user.png')}/>
                </div>
                <p className="name">
                    <Link to={`${url}/profile`}>
                        <span>Hello </span> <span>Alamin Hossen</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default DashboardHeader
