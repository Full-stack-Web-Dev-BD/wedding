import React, { useState } from 'react'
import './todolist.css'
import PageFooter from '../PageFooter/PageFooter'
import TowLineTitle from '../Title/TowLineTitle'





const ToDoListIndex = () => {
    const [budget, setBudget] = useState('105,000')
    return (
        <div>
            <div className="col-md-6 offset-md-3">
                <div className="listContainer">
                    <TowLineTitle h1='To do '  icon='fas fa-heart' h2="list" p="We have a long way to go "/>
                    <div className="listTitle">
                        <h1>Pre Wedding</h1>
                        <p>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-heart"></i>
                        </p>
                    </div>
                    <p className="todoListDiscription mb-5" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam autem nam eos, totam fuga ipsam ut eveniet impedit a! Eum aspernatur natus voluptate commodi accusamus eligendi non culpa ullam placeat</p>
                    <div className="todoList">
                        <div className="singleItem">
                            <div className="subject"> <p> <i class="fas fa-heart"></i> Set the Wedding date</p></div>
                            <div className="date lineDate">
                                <div className="day"><p>6</p></div>
                                <div className="month"><p>9</p></div>
                                <div className="year"><p>2021</p></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject"> <p> <i class="fas fa-heart"></i> Determine number of geusts</p></div>
                            <div className="date lineGeusts">
                                <div className="arrowDown"><i class="fas fa-angle-down"></i></div>
                                <div className="geustsCount"><p>105</p></div>
                                <div className="arrowUp"><i class="fas fa-angle-up"></i></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject widthPBlog "> <p> <i class="fas fa-heart"></i>Decide  if children will attend your wedding </p></div>
                            <div className="date blog">
                                <i className="fa fa-check-square"></i>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject widthPBlog "> <p> <i class="fas fa-heart"></i>Determine your wedding budget </p></div>
                            <div className="date budget">
                                <input defaultValue={`$${budget}`} type="" />
                            </div>
                        </div>
                        
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject widthPBlog "> <p> <i class="fas fa-heart"></i> Crear un blog o sitio web de bodas</p></div>
                            <div className="date blog">
                                <i className="fa fa-check-square"></i>
                            </div>
                        </div>
                        
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject engeagmentW "> <p> <i class="fas fa-heart"></i> Hire a photographer for your engagement photos</p></div>
                            <div className="date engeagmentPhotos">
                                <i className="fa fa-check-square"></i>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="singleItem">
                            <div className="subject engeagmentW "> <p> <i class="fas fa-heart"></i>Plan your engagement party</p></div>
                            <div className="date party">
                                <i className="fa fa-check-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="nextButton">
                        <button classname="btn btnNext">Next</button>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default ToDoListIndex
