import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
import {useRecoilValue} from 'recoil'
import {isLoggin} from '../../recoilState/recoilState'
const Nav = ({url,baseUrl}) => {
    const isLogginValue=useRecoilValue(isLoggin)
    console.log(isLogginValue,'isloggin')
    return (
        <div className="dbHeader">
            <div className="dbhLogo">
                <Link to='/dashboard'>
                    <img style={{cursor:'pointer'}} src={require('../../img/logo.png')} />
                </Link>
            </div>
            <div className="dbMenu">
                <ul>
                    <a href={`${baseUrl}#pricing`}><li>Pricing</li></a>
                    <a href={`${baseUrl}#realWeddying`}><li>Real Weddings</li></a>
                    <a href={`${baseUrl}about`}><li>About Us</li></a>
                </ul>
            </div>
            <div className="dbProfile">
                {
                    isLogginValue?
                    <div className="d-flex">
                        <div className="pImg">
                            <img src={require('../../img/user.png')}/>
                        </div>
                        <p className="name">
                            <Link style={{textDecoration:'none'}} to='/dashboard'>
                                <span></span> <span>Go to Dashboard</span>
                            </Link>
                        </p>
                    </div>:
                    <ul className="signupMenu" >
                        <Link to='/login'><li><i className="fa fa-sign-out-alt"></i> <span>Login</span></li></Link>
                        <Link to='/register'><li><i className="far fa-heart"> </i> <span>Sign up</span></li></Link>
                    </ul>
                }
            </div>
        </div>
    )
}
export default Nav