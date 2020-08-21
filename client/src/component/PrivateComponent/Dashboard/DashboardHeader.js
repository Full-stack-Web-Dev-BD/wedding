import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'
const DashboardHeader = ({url,baseUrl}) => {
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
                <div className="pImg">
                    <img src={require('../../img/user.png')}/>
                </div>
                <p className="name">
                    <Link style={{textDecoration:'none'}} to={`${url}/profile`}>
                        <span>Hello </span> <span>Alamin Hossen</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default DashboardHeader
