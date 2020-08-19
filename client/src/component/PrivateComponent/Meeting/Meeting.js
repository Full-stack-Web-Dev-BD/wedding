import React, { useState } from 'react'
import './meeting.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Meeting = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5">
                <TowLineTitle h1='' h2="Meeting" p=""/>
                <div className="meeting">
                    <div className="meetingComponent">
                        <div className ="singleWay">
                            <div className="mediaIcon">
                                <img src={require('../../icon/zoomimg.png')}/>
                            </div>
                            <div className="joinLink">
                                <input  />
                            </div>
                            <div className="copyIcon">
                                <img src={require('../../icon/copyimg.png')}/>
                            </div>
                        </div>
                        <div className ="singleWay ">
                            <div className="mediaIcon">
                                <img src={require('../../icon/googleMeet.png')}/>
                            </div>
                            <div className="joinLink">
                                <input  />
                            </div>
                            <div className="copyIcon">
                                <img style={{width:'52%'}} src={require('../../icon/copyimg.png')}/>
                            </div>
                        </div>
                        <div className ="singleWay ">
                            <div className="mediaIcon">
                                <img style={{width:'90%'}} src={require('../../icon/ringimg.png')}/>
                            </div>
                            <div className="joinLink">
                                <input  />
                            </div>
                            <div className="copyIcon">
                                <img src={require('../../icon/copyimg.png')}/>
                            </div>
                        </div>
                        <div className ="singleWay ">
                            <div className="mediaIcon">
                                <img style={{width:"52%"}} src={require('../../icon/whatsapp.png')}/>
                            </div>
                            <div className="joinLink">
                                <input  />
                            </div>
                            <div className="copyIcon">
                                <img src={require('../../icon/copyimg.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default Meeting