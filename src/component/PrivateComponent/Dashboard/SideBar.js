import React from 'react'
import {Link} from 'react-router-dom'
const SideBar = ({url}) => {
    return (
        <div className="sideBar">
            <div className="sidebarHeader">
                <div className="sidebarToggler">
                    <div className="toggler">
                        <i class="fas fa-times"></i></div>
                </div>
            </div>
            <div className="sideBarMenu">
                <ul>
                    <li><i class="fas fa-heart"></i></li>

                    <li><Link to={`${url}`}><i class="fas fa-lightbulb"></i>  </Link></li>
                    <li><Link to={`${url}/todo`}><i class="fas fa-file-invoice"></i>   </Link></li>
                    <li><Link to={`${url}/budget`}><i class="fas fa-dollar-sign"></i>   </Link></li>
                    <li><Link to={`${url}/vendors`}><i class="fas fa-truck"></i>  </Link></li>
                    <li><Link to={`${url}/guestlist`}><i class="fas fa-user-friends"></i>  </Link></li>
                    <li><Link to={`${url}/table`}><i class="fas fa-table"></i>  </Link></li>
                    <li><Link to={`${url}/stationery`}><i class="fas fa-bars"></i>  </Link></li>
                    <li><Link to={`${url}/meeting`}><i class="fas fa-gift"></i>  </Link></li>
                    <li><Link to={`${url}`}><i class="fas fa-comment-alt"></i> </Link></li>
                    <li><Link to={`${url}`}><i class="fas fa-calendar-alt"></i></Link></li>
                    <li><Link to={`${url}`}><i class="fas fa-cog"></i>  </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
