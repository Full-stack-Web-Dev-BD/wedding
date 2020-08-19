import React, { useState } from 'react'
import './vision.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'
const VisionBoard = () => {
    return (
        <div>
            <div className="col-md-6 offset-md-3 mb-5">
                <TowLineTitle h1='Vision' h2="Board" p="Save and share all your ideas"/>
                <div className="vision">
                    <div className="row mt-5">
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Ceremony</span>
                                <span>24 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Ceremony</span>
                                <span>36 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Dress</span>
                                <span>94 Photos</span>
                            </div>
                         </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Decor</span>
                                <span>32 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Tuxedos</span>
                                <span>1 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Catering</span>
                                <span>67 Photos</span>
                            </div>
                         </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Ceremony</span>
                                <span>456 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Ceremony</span>
                                <span>22 Photos</span>
                            </div>
                         </div>
                        <div className="col-md-4 singleVision"> 
                            <img src={require('../../img/placeholder.png')}/>
                            <div className="singleVisionText">
                                <span>Dress</span>
                                <span>86 Photos</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default VisionBoard