import React from 'react'

import SelectOption from './SelectOption'
const ListHeader = () => {
    return (
        <div>
            <div className="headerComponents">
                <div className="search mt-15 mr22">
                    <div class="inputGroup">
                        <div class="inputAdd">
                            <div class="leftAdd">
                                <span className="addIcon">
                                <i  class="fas fa-search" style={{color:'#2B3240 !importent'}}></i>
                                </span>
                            </div>
                        </div>
                        <input type="email" placeholder="Search here" class="inputFiled" aria-label=""/>
                        <div className="w40"></div>
                    </div>
                </div>
                
                <div className="status mt-15 mr22">
                    <SelectOption options={['Active','Blocked']} placeHolder='Status'/>
                </div>
                
                <div className="search mt-15 mr22">
                    <div class="inputGroup">
                        <div className="w25"></div>
                        <input type="date" placeholder="Date" class="inputFiled dateInput" aria-label=""/>                        
                        <div className="w25"></div>
                    </div>
                </div>
                
                <div className="status mt-15 mr22">
                    <SelectOption options={['Joining Date','Name(A-Z)','Name(Z-A)']} placeHolder='Sort By'/>
                </div>
                <div className="status mt-15 mr22">
                    <SelectOption options={['Posters','Tickers','Completed Number','Posted Number','Earned Amount','Paid Amount','Location']} placeHolder='More' width="197px"/>
                </div>
                <div className="applyButton mt-15">
                    <button className="btn apply">Apply</button>
                </div>

            </div>
        </div>
    )
}

export default ListHeader
