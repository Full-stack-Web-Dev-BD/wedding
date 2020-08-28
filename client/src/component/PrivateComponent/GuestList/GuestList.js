import React, { useEffect, useState } from 'react'
import './guestlist.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
import axios from 'axios'
import StatusDropDown from './StatusDropDown'

import { useRecoilState } from 'recoil'
import { allGuestState } from '../../recoilState/recoilState'

const GuestList = () => {
    const [getGuestState, setGuestState] = useRecoilState(allGuestState)

    useEffect(() => {
        axios.get('/get-guests')
            .then(res => {
                setGuestState(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
        let a = []
    }, [])
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
                                <div><h1 className="color2">{getGuestState.length}</h1></div>
                                <div><p>Guest</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-check color2"></i>
                                <div><h1 className="color2">{getGuestState.filter(single => (single.status === 'Confirm')).length}</h1></div>
                                <div><p>Confirmed</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-hourglass-start color3"></i>
                                <div><h1 className="color3">{getGuestState.filter(single => (single.status === 'Pending '|| single.status==='Pending')).length}</h1></div>
                                <div><p>Pending</p></div>
                            </div>
                            <div className="col-md-3 singleGuest">
                                <i className="fa fa-frown-open color4"></i>
                                <div><h1 className="color4">{getGuestState.filter(single => (single.status === 'Not Going')).length}</h1></div>
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
                                    <p>First Name</p>
                                    <span>Sampla First Name</span>
                                </td>
                                <td scope="col">
                                    <p>Last Name</p>
                                    <span>Sampla Last Name</span>
                                </td>
                                <td scope="col">
                                    <p>Group/Family</p>
                                    <span>Brides Family</span>
                                </td>
                                <td scope="col">
                                    <p>Status</p>
                                    <span>Status</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody className="guestTableBody">
                            {
                                getGuestState.map(single => {
                                    return (
                                        <tr>
                                            <td><span> {single.firstName} </span></td>
                                            <td><span>{single.lastName}</span></td>
                                            <td><span> {single.groupFamily} </span></td>
                                            <StatusDropDown status={single.status} guest={single} />
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <PageFooter add='Add New Guest' />
        </div>
    )
}

export default GuestList