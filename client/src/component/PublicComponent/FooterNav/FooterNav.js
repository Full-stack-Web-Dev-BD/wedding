import React from 'react'
import {a} from 'react-router-dom'
import './footerNav.css'
const FooterNav = ({url,baseUrl}) => {
    console.log(url)
    return (
        <div className="footerMenu text-center">
            <div className="dbMenu " style={{width:'100%'}}>
                <ul>
                    <a href={`${baseUrl}`}> <li>Inicio</li></a>
                    <a href={`${baseUrl}#pricing`}> <li>Pricing</li></a>
                    <a href={`${baseUrl}#realWeddying`}> <li>Real Weddings</li></a>
                    <a href={`${baseUrl}about`}> <li>About Us</li></a>
                    <a href={`${baseUrl}contact`}><li>Contact us</li></a>
                </ul>
            </div>
            <div className="clearfix"></div>
            <div className="footerIconHolder">
                <div className="singleFooterIcon">
                    <i className="fa fa-twitter"></i>
                </div>
                <div className="singleFooterIcon">
                    <i className="fa fa-facebook-f"></i>
                </div>
                <div className="singleFooterIcon">
                    <i className="fa fa-instagram"></i>
                </div>
                <div className="singleFooterIcon">
                    <i className="fa fa-whatsapp"></i>
                </div>
            </div>
        </div>
    )
}
export default FooterNav