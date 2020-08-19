import React from 'react'
import Nav from '../Navbar/Nav'
import './about.css'
const About = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <Nav baseUrl="/"/>
            <div className="slider">
                <img src={require('../../img/slider.png')}/>
                <div className="container">
                    <div className="sliderContent">
                        <h2>the simple way to plan your wedding </h2>
                        <p>Set your budget and manage everything from home </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 offset-md-3 about">
                <div className="col-md-10 offset-md-1">
                    <h3>About us <i className="far fa-heart"></i></h3>
                    <p>Find out how to use Handoff and save hours for your developersFind out how to use Handoff and save hours for your developersFind out how to use Handoff and save hours for your developersFind out how to use Handoff and save hours for your developersFind out how to use Handoff and save hours for your developersFind out how to use Handoff and save hours for your developers</p>
                </div>
            </div>
        </div>
    )
}
export default About