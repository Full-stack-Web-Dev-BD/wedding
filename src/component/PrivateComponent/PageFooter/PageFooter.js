import React from 'react'

import './pageFooter.css'
const PageFooter = ({add,vendor}) => {
    const openChat=()=>{
        console.log(document.getElementById('ctwChat'))
    }
    return (    
        <div className="pageFooter container">
            <div className="textMsg">
                <p>We are on time <i  className=" fa fa-heart"/></p>
            </div>
            <div className="contact">
                <p>any question ?<i class="fas fa-comment-alt"></i> </p>
            </div>
            {
                add?
                
                <div className="textMsg">
                    <p> {add} <i style={{marginLeft:'15px',cursor:'pointer'}} class="fas fa-users"></i> </p>
                </div>
                :''
            }
            {
                vendor?
                
                <div className="textMsg">
                    <p> {vendor} <i style={{marginLeft:'15px',cursor:'pointer',color:'#FFA9AD'}} class="fas fa-plus"></i> </p>
                </div>
                :''
            }
        </div>
    )
}

export default PageFooter
