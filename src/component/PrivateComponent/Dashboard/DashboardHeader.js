import React from 'react'

const DashboardHeader = () => {
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
                    Hello <span>Alamin Hossen</span>
                </p>
            </div>
        </div>
    )
}
export default DashboardHeader
