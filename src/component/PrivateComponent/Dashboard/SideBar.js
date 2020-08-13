import React from 'react'

const SideBar = () => {
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
                    <li><i class="fas fa-lightbulb"></i></li>
                    <li><i class="fas fa-file-invoice"></i> </li>
                    <li><i class="fas fa-dollar-sign"></i> </li>
                    <li><i class="fas fa-truck"></i></li>
                    <li><i class="fas fa-user-friends"></i></li>
                    <li><i class="fas fa-table"></i></li>
                    <li><i class="fas fa-bars"></i></li>
                    <li><i class="fas fa-gift"></i></li>
                    <li><i class="fas fa-comment-alt"></i></li>
                    <li><i class="fas fa-calendar-alt"></i></li>
                    <li><i class="fas fa-cog"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
