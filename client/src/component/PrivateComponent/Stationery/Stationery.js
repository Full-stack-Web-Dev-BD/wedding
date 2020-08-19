import React, { useState } from 'react'
import './stationery.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const Stationery = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5 ">
                <TowLineTitle h1='' h2="Stationery" p=""/>
                <div className="loveBorder st">
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-heart"></i>
                </div>
                <p className="profileText">Save The Date</p>
                <div className="stationery mt-5 ">
                    <div className="stFormInner">
                        <div className="stSingleInput">
                            <span>Name</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>Title</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>For what?</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>Who?</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>When?</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>Where</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>Extra:</span>
                            <input  />
                        </div>
                        <div className="stSingleInput">
                            <span>Extra:</span>
                            <input  />
                        </div>
                        <div className="stNextBtn">
                            <img src={require('../../img/pdfDownload.png')} />
                            <button>Next</button>
                        </div>
                    </div>

                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default Stationery