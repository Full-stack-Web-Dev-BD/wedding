import React, { useState } from 'react'
import './budget.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Budget = () => {
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
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Officiant Fee</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Music</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Rentals</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Flowers</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Transportation</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Marriage License</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Rehearsal Dinner</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Miscellaneous  Venue</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr>
                                    <td><p>Other</p></td>
                                    <td><input/></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                                <tr className="subTotal">
                                    <td><p></p></td>
                                    <td><p>Sub Total</p></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                    <td><input  placeholder="$" type="number" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <PageFooter  />
        </div>
    )
}

export default Budget