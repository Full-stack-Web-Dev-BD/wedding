import React from 'react'

import './pageFooter.css'
const PageFooter = ({add,vendor,table}) => {
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
            }        {
                table?
                
                <div className="textMsg">
                    <p> {table} <img style={{width:'35px',height:'40px', cursor:'pointer'}} src={require('../../img/table.png')}/> </p>
                </div>
                :''
            }
        </div>
    )
}

export default PageFooter
