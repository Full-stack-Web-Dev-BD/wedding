import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './owlCustom.css'
import './review.css'
const Review = () => {
    return (
        <div>
            
            <OwlCarousel
                className="owl-theme"
                items="5"
                autoplay={true}
                dots={false}
            >
            <div className=" item">
                <div className ="singleReview">
                    <div className="reviewBody">
                        <p>
                            The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                            The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                         </p>
                    </div>
                    <div className="reviewImg">
                        <img src={require('../../img/placeholder.png')}/>
                    </div>
                    <h5>David & Maric</h5>
                    <div className="reviewIcon">
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
            </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className=" item">
                    <div className ="singleReview">
                        <div className="reviewBody">
                            <p>
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early access and 
                                The next generation of our icon library + toolkit is coming with more icons, more styles, more service.
                             </p>
                        </div>
                        <div className="reviewImg">
                            <img src={require('../../img/placeholder.png')}/>
                        </div>
                        <h5>David & Maric</h5>
                        <div className="reviewIcon">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Review
