import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './owlCustom.css'
const RealWeddingOwl = () => {
    return (
        <div>
            <OwlCarousel
                className="owl-theme"
                items="5"
                autoplay={true}
                dots={false}
            >
            <div className="item">
                <div className="realWeddyingItem">
                    <img src={require('../../img/placeholder.png')}/>
                    <i className="far fa-heart"></i>
                    <p>Claudia & Nick </p>
                    <span> 8/11/2014</span>
                </div>
            </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
                <div className="item">
                    <div className="realWeddyingItem">
                        <img src={require('../../img/placeholder.png')}/>
                        <i className="far fa-heart"></i>
                        <p>Claudia & Nick </p>
                        <span> 8/11/2014</span>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default RealWeddingOwl
