import React from 'react'
import Nav from '../Navbar/Nav'
import './home.css'
import RealWeddingOwl from './RealWeddingOwl'
import LetesArticles from './LetesArticles'
import Review from './Review'
import FooterNav from '../FooterNav/FooterNav'
const Home = () => {
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
            <div className="moreFeature container">
                <div className="col-md-8 offset-md-2 boardListContainer">
                    <div className="row">
                        <div className="singleFeatureItem col-md-3 text-center">
                            <i className="fa fa-file-alt"></i>
                            <span>Vision Board</span>
                        </div>
                        <div className="singleFeatureItem col-md-3 text-center">
                            <i className="fa fa-calendar-check"></i>
                            <span>To Do List</span>
                        </div>
                        <div className="singleFeatureItem col-md-3 text-center">
                            <i className="fa fa-dollar-sign"></i>
                            <span>BUdget Planner</span>
                        </div>
                        <div className="singleFeatureItem col-md-3 text-center">
                            <i className="fa fa-truck-moving"></i>
                            <span>Vendors</span>
                        </div>
                    </div>
                </div>
                <div style={{color:'#9E9E9E'}} className="text-center mt-5  mb-5">
                    <div className="d-inline">
                        <p className="m-0">More Feature</p>
                        <i className="fa fa-caret-down"></i>
                    </div>
                </div>
            </div>
            <div className="container mb-5 mt-5" id="pricing">
                <div className="col-md-8 offset-md-2">
                    <h1 style={{color:'#E2B2B0' ,textAlign:'center'}}>Choose a  plan</h1>
                    <div className="plan mt-5 row">
                        <div className=" col-md-4 ">
                            <div className="singlePlan pt-4 pb-4">
                                <div className="planHeader">
                                    <i className="fa fa-heart"></i>
                                    <h3>Fremium</h3>
                                </div>
                                <div className="planBody">
                                    <ul>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                    </ul>
                                </div>
                                <div className="planFooter">
                                    <button className="btn">Free</button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 ">
                            <div className="singlePlan middlePlan pt-4 pb-4">
                                <div className="planHeader">
                                    <i className="fa fa-heart"></i>
                                    <i className="fa fa-heart"></i>
                                    <h3>Standard</h3>
                                </div>
                                <div className="planBody">
                                    <ul>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                    </ul>
                                </div>
                                <div className="planFooter">
                                    <button className="btn">Free</button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 ">
                            <div className="singlePlan pt-4 pb-4">
                                <div className="planHeader">
                                    <i className="fa fa-heart"></i>
                                    <i className="fa fa-heart"></i>
                                    <i className="fa fa-heart"></i>
                                    <h3>Deluxe</h3>
                                </div>
                                <div className="planBody">
                                    <ul>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                        <li>lorem ipsum</li>
                                    </ul>
                                </div>
                                <div className="planFooter">
                                    <button className="btn">Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5  ">
                <div className="col-md-10 offset-md-1 pt-5 allCarousel">
                    <div className="singleCarousel mb-5 " id="realWeddying">
                        <h3 style={{color:'#E3B6B5'}} className="text-center mb-4">Real Wedding</h3>
                        <RealWeddingOwl/>
                    </div>
                    <div className="singleCarousel mb-5 mt-5  pt-3">
                        <h3 style={{color:'#E3B6B5'}} className="text-center mb-4 mt-5">Latest Articles and  Tips</h3>
                        <LetesArticles/>
                    </div>
                    <div className="singleCarousel mb-5 mt-5  pt-3">
                        <h3 style={{color:'#E3B6B5'}} className="text-center mb-4 mt-5">Reviews</h3>
                        <Review/>
                    </div>
                    <div className="carouselBorder"></div>
                </div>
            </div>
            <FooterNav baseUrl="/"/>
        </div>
    )
}
export default Home