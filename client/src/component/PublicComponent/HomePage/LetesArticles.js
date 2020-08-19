import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './owlCustom.css'
const LetesArticles = () => {
    return (
        <div>
            <OwlCarousel
                className="owl-theme"
                items="5"
                autoplay={true}
                dots={false}
            >
            <div className="item letesTips">
                <div className=" letestTipsItems "  style={{paddingBottom:'8px'}}>
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px' ,display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item letesTips">
                <div className=" letestTipsItems ">
                    <img src={require('../../img/placeholder.png')}/>
                    <div className="singleTips">
                        <div className="titleDate">
                            <p style={{textAlign:'left' ,marginLeft:'10px'}}>Lorem Ipsum</p>
                            <span style={{textAlign:'left' ,marginLeft:'10px',display:'block',width:'100%'}}>9/12/2013</span>
                        </div>
                        <div className="tipsIcons">
                            <div className="tipsIconHolder">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-comment-dots"></i>
                                <i className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </OwlCarousel>
        </div>
    )
}

export default LetesArticles
