import React, { useState } from 'react'
import './profile.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Profile = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5 ">
                <TowLineTitle h1='' h2="Profile" p=""/>
                <div className="loveBorder">
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                </div>
                <p className="profileText">Couple Profile</p>
                <div className="ppImg">
                    <div className='imgHolder'>
                        <i className="fa fa-plus-circle"></i>
                        <img src={require('../../img/user2.png')}/>
                    </div>
                </div>
                <div className="profileForm mt-5 ">
                    <div className="formInner">
                        <div className="singleInput">
                            <span>Name</span>
                            <input  />
                        </div>
                        <div className="singleInput">
                            <span>Email</span>
                            <input  />
                        </div>
                        
                        <div className="singleInput">
                            <span>Contact number</span>
                            <input  />
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default Profile