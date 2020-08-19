import React, { useState } from 'react'
import './vendors.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Vendors = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5">
                <TowLineTitle h1='' h2="Vendors" p="" />
                <div className="vendors">
                    <div className="col-md-6">
                        <img src={require('../../img/gray.png')}/>
                        <div className="vendorHeader">    
                            <p className="colory">Receptiont Venue</p>
                            <p className="colorx">Company Name</p>
                        </div>
                        <div className="info">
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Address</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Phone</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Contact</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Cellphone</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>E-mail</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Website</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Social Media</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="infoFooter">
                                <img src={require('../../img/proposal.png')}/>
                                <div className="infoDevider"></div>
                                <img src={require('../../img/contact.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../img/gray.png')}/>
                        <div className="vendorHeader">    
                            <p className="colory">Receptiont Venue</p>
                            <p className="colorx">Company Name</p>
                        </div>
                        <div className="info">
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Address</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Phone</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Contact</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Cellphone</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>E-mail</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Website</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="singleInfo">
                                <div className="infoTitle"><p>Social Media</p></div>
                                <div className="infoInput"><input /></div>
                            </div>
                            <div className="infoFooter">
                                <img src={require('../../img/contact.png')}/>
                                <div className="infoDevider"></div>
                                <img src={require('../../img/proposal.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter vendor='Add Vendor'  />
        </div>
    )
}

export default Vendors