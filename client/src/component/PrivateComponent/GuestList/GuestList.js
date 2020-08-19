import React, { useState } from 'react'
import './guestlist.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const GuestList = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5">
                <TowLineTitle h1='Geust' h2="List" p="My Guest Manager" />
                <p className="text-center" style={{ color: '#D0D0D0', lineHeight: '0' }}>Guest manager allows you to  take your guest management for wedding events</p>
                <div className="geustlist">
                    <div className="guestContainer">
                        <div className="guestContent row">
                            <div className="col-md-3  singleGuest">
                                <i className=" fa fa-users color1"></i>
                                <div><h1 className="color1">200</h1></div>
                                <div><p>Guest</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-check color2"></i>
                                <div><h1 className="color2">200</h1></div>
                                <div><p>Confirmed</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-hourglass-start color3"></i>
                                <div><h1 className="color3">200</h1></div>
                                <div><p>Pending</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-frown-open color4"></i>
                                <div><h1 className="color4">200</h1></div>
                                <div><p>Not Going</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="guestlistTable">
                    <table class="table table-borderless">
                        <thead>
                            <tr className="tableHead">
                                <td scope="col">
                                    <p>Last Name</p>
                                    <span>Sampla First Name</span>
                                </td>
                                <td scope="col">
                                    <p>First Name</p>
                                    <span>Sampla Last Name</span>
                                </td>
                                <td scope="col">
                                    <p>Group/Family</p>
                                    <span>Brides Family</span>
                                </td>
                                <td scope="col">
                                    <p>Status</p>
                                    <span>Confirmed</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody className="guestTableBody">
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                            <tr>
                                <td><span>Md Alamin</span></td>
                                <td><span>Hossen</span></td>
                                <td><span>Group / Family</span></td>
                                <td><span>Confirmed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <PageFooter add='Add New Guest' />
        </div>
    )
}

export default GuestList