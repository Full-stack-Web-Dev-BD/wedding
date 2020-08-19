import React, { useState } from 'react'
import './cupledashboard.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const CupleDashboard = () => {
    return (
        <div>
            <div className="col-md-8 offset-md-2 mb-5">
                <TowLineTitle h1='Couple' h2="dashboard" p="Mr.& Mrs" />
                <div className="col-md-10 offset-md-1">
                    <div className="firstSection">
                        <div className="firstSectionContent pb-5">
                            <img src={require('../../img/user.png')}/>
                            <div className="weddyingInfo">
                                <i className="far fa-calendar-alt"></i>
                                <div className="weddyingDate">
                                    <p>Weddying Date:</p>
                                    <span>6/9/2021</span>
                                </div>
                            </div>
                            <div className="weddyingInfo">
                                <i className="fa fa-hourglass-start "></i>
                                <div className="weddyingDate">
                                    <p>Weddying Countdown:</p>
                                    <span>350 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secondSection mt-5">
                        <div className="sectionCectionContent row">
                            <div className="col-md-6 weddyingInfoContainer">
                                <div className="weddyingInfo" style={{marginLeft:'0'}}>
                                    <i className="fa fa-heart"></i>
                                    <div className="weddyingDate">
                                        <p> <strong> Weddying Date:</strong></p>
                                        <p>123 Remain</p>
                                        <span>89 Complete</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 guestHistory">
                                        <p>Guest List</p>
                                        <i className="far fa-heart"></i>
                                        <p>120 Invited</p>
                                        <span>54 Confirm</span>
                                    </div>
                                    <div className="col-md-6 guestHistory">
                                        <p>Guest List</p>
                                        <i className="far fa-heart"></i>
                                        <p>120 Pending</p>
                                        <span>54 Unseen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="payment col-md-6">
                                <div className="history">
                                    <p><strong>Payment</strong></p>
                                    <div className="paymentHistory">
                                        <div className="balance d-flex">
                                            <p>Total balance</p>
                                            <p>23,298.82</p>
                                        </div>

                                        <p className="height">Total Payments</p>
                                        <div className="balance d-flex">
                                            <p>Done </p>
                                            <p>23,298.82</p>
                                        </div>

                                        
                                        <p className="height">Total Payments</p>
                                        <div className="balance d-flex">
                                            <p>Pending </p>
                                            <p>23,298.82</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter  />
        </div>
    )
}

export default CupleDashboard