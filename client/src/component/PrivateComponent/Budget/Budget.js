import React, { useState, useEffect } from 'react'
import './budget.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'

import {useRecoilState,useRecoilValue} from 'recoil'
import {userInfo} from '../../recoilState/recoilState'
import Axios from 'axios'

const Budget = () => {
    const [getUserInfo, setUserInfo] =useRecoilState(userInfo)
    const [isSaved, setIsSaved] = useState(false)
    const [total, setTotal] = useState({
        estimatedCost:'' ,
        actualcost:'' ,
        differenc: ''
    })
    const [budget, setBudget] = useState({
        ceremonyVenuecost: {},
        officiantFee: {},
        music: {},
        rentals: {},
        flowers: {},
        transportation: {},
        marriageLicense: {},
        rehearsalDinner: {},
        miscellaneousVenue: {},
        other: {}
    })


    const onChangeHandler = (e) => {
        e.preventDefault()
        const updateBudget = { ...budget }
        if (e.target.name.split(' ')[1] === 'ceremonyVenuecost') {
            updateBudget.ceremonyVenuecost[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'officiantFee') {
            updateBudget.officiantFee[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'music') {
            updateBudget.music[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'rentals') {
            updateBudget.rentals[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'flowers') {
            updateBudget.flowers[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'transportation') {
            updateBudget.transportation[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'marriageLicense') {
            updateBudget.marriageLicense[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'rehearsalDinner') {
            updateBudget.rehearsalDinner[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'miscellaneousVenue') {
            updateBudget.miscellaneousVenue[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        if (e.target.name.split(' ')[1] === 'other') {
            updateBudget.other[e.target.name.split(' ')[0]] = e.target.value
            setBudget(updateBudget)
        }
        function esT(){
            return (
               parseInt( budget.ceremonyVenuecost.estimatedCost ?budget.ceremonyVenuecost.estimatedCost :0)+ 
               parseInt( budget.officiantFee.estimatedCost ?budget.officiantFee.estimatedCost :0)+ 
               parseInt( budget.music.estimatedCost ?budget.music.estimatedCost :0)+ 
               parseInt( budget.rentals.estimatedCost ?budget.rentals.estimatedCost :0)+ 
               parseInt( budget.flowers.estimatedCost ?budget.flowers.estimatedCost :0)+ 
               parseInt( budget.transportation.estimatedCost ?budget.transportation.estimatedCost :0)+ 
               parseInt( budget.marriageLicense.estimatedCost ?budget.marriageLicense.estimatedCost :0)+ 
               parseInt( budget.rehearsalDinner.estimatedCost ?budget.rehearsalDinner.estimatedCost :0)+ 
               parseInt( budget.miscellaneousVenue.estimatedCost ?budget.miscellaneousVenue.estimatedCost :0)+ 
               parseInt( budget.other.estimatedCost?budget.other.estimatedCost:0) 
            )
        }
        function asT(){
            return (
               parseInt( budget.ceremonyVenuecost.actualCost ?budget.ceremonyVenuecost.actualCost :0)+ 
               parseInt( budget.officiantFee.actualCost ?budget.officiantFee.actualCost :0)+ 
               parseInt( budget.music.actualCost ?budget.music.actualCost :0)+ 
               parseInt( budget.rentals.actualCost ?budget.rentals.actualCost :0)+ 
               parseInt( budget.flowers.actualCost ?budget.flowers.actualCost :0)+ 
               parseInt( budget.transportation.actualCost ?budget.transportation.actualCost :0)+ 
               parseInt( budget.marriageLicense.actualCost ?budget.marriageLicense.actualCost :0)+ 
               parseInt( budget.rehearsalDinner.actualCost ?budget.rehearsalDinner.actualCost :0)+ 
               parseInt( budget.miscellaneousVenue.actualCost ?budget.miscellaneousVenue.actualCost :0)+ 
               parseInt( budget.other.actualCost?budget.other.actualCost:0) 
            )
        }
        console.log(esT())
        setTotal({
            estimatedCost: esT() ,
            actualcost: asT(),
            differenc: Math.abs(esT()-asT())
        })
    }
    return (
        <div>
            <div className="col-md-8 offset-md-2 mb-5">
                <TowLineTitle h1='' h2="Budget" p="" />
                <div className="col-md-10 offset-md-1">

                    <p className="budgetTitle">
                        <i class=" fa fa-heart"></i>Ceremony
                    </p>
                    <div className="guestlistTable">
                        <table class="table table-borderless">
                            <thead>
                                <tr className="budgetTableHEader">
                                    <td scope="col"><p></p></td>
                                    <td scope="col"><p>Description</p></td>
                                    <td scope="col"><p>Estimated Cost</p></td>
                                    <td scope="col"><p>Actual Cost</p></td>
                                    <td scope="col"><p>Difference</p></td>
                                </tr>
                            </thead>
                            <tbody className="budgetTable">
                                <tr>
                                    <td><p>Ceremony  Venue</p></td>
                                    <td><input name="description ceremonyVenuecost" value={budget.ceremonyVenuecost.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost ceremonyVenuecost" value={budget.ceremonyVenuecost.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost ceremonyVenuecost" value={budget.ceremonyVenuecost.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.ceremonyVenuecost.estimatedCost - budget.ceremonyVenuecost.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Officiant Fee</p></td>
                                    <td><input name="description officiantFee" value={budget.officiantFee.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost officiantFee" value={budget.officiantFee.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost officiantFee" value={budget.officiantFee.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.officiantFee.estimatedCost - budget.officiantFee.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Music</p></td>
                                    <td><input name="description music" value={budget.music.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost music" value={budget.music.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost music" value={budget.music.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.music.estimatedCost - budget.music.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Rentals</p></td>
                                    <td><input name="description rentals" value={budget.rentals.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost rentals" value={budget.rentals.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost rentals" value={budget.rentals.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.rentals.estimatedCost - budget.rentals.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Flowers</p></td>
                                    <td><input name="description flowers" value={budget.flowers.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost flowers" value={budget.flowers.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost flowers" value={budget.flowers.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.flowers.estimatedCost - budget.flowers.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Transportation</p></td>
                                    <td><input name="description transportation" value={budget.transportation.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost transportation" value={budget.transportation.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost transportation" value={budget.transportation.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.transportation.estimatedCost - budget.transportation.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Marriage License</p></td>
                                    <td><input name="description marriageLicense" value={budget.marriageLicense.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost marriageLicense" value={budget.marriageLicense.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost marriageLicense" value={budget.marriageLicense.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.marriageLicense.estimatedCost - budget.marriageLicense.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Rehearsal Dinner</p></td>
                                    <td><input name="description rehearsalDinner" value={budget.rehearsalDinner.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost rehearsalDinner" value={budget.rehearsalDinner.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost rehearsalDinner" value={budget.rehearsalDinner.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.rehearsalDinner.estimatedCost - budget.rehearsalDinner.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Miscellaneous  Venue</p></td>
                                    <td><input name="description miscellaneousVenue" value={budget.miscellaneousVenue.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost miscellaneousVenue" value={budget.miscellaneousVenue.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost miscellaneousVenue" value={budget.miscellaneousVenue.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.miscellaneousVenue.estimatedCost - budget.miscellaneousVenue.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Other</p></td>
                                    <td><input name="description other" value={budget.other.description} onChange={e => { onChangeHandler(e) }} type="text" /></td>
                                    <td><input name="estimatedCost other" value={budget.other.estimatedCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input name="actualCost other" value={budget.other.actualCost} onChange={e => { onChangeHandler(e) }} placeholder="$" type="number" /></td>
                                    <td><input disabled value={budget.other.estimatedCost - budget.other.actualCost} placeholder="$ 00" type="number" /></td>
                                </tr>
                                <tr className="subTotal">
                                    <td><p></p></td>
                                    <td><p>Sub Total</p></td>
                                    <td><input disabled style={{fontWeight:'900',fontSize:'18px'}} value={total.estimatedCost}  placeholder="$"  /></td>
                                    <td><input disabled style={{fontWeight:'900',fontSize:'18px'}} value={total.actualcost}  placeholder="$"  /></td>
                                    <td><input disabled style={{fontWeight:'900',fontSize:'18px'}} value={total.differenc}  placeholder="$"  /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-right">
                            {/* <button className="btn wBtn" onClick={() => {saveBudget() }}> Save To Drive </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}

export default Budget