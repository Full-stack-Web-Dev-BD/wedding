import React from 'react'
import UserList from '../UserList/UserListIndex'
import SideBar from './SideBar'


import './dashboard.css'
import DashboardHeader from './DashboardHeader'
import ToDoListIndex from '../ToDoList/ToDoListIndex'
import { BrowserRouter ,Switch,Route} from 'react-router-dom'
import VisionBoard from '../visionBoard/VisionBoard'
import Profile from '../Profile/Profile'
import Stationery from '../Stationery/Stationery'
import Meeting from '../Meeting/Meeting'
import GuestList from '../GuestList/GuestList'
import Budget from '../Budget/Budget'
import Vendors from '../Vendors/Vendors'
import Table from '../Table/Table'
const DashboardIndex = () => {
    return (
        <BrowserRouter>
            <Switch>
                <div className="dashboard">
                    <div className="dashboardHeader">
                        <DashboardHeader/>
                    </div>
                    <div className="dashboardSideBar">
                        <SideBar/>
                    </div>
                    <div className="dashboardPages">
                        <div style={{paddingTop:'70px'}}>
                            <Route path="/todo"  component={ToDoListIndex} />
                            <Route path="/vision"  component={VisionBoard} />
                            <Route path="/stationery"  component={Stationery} />
                            <Route path="/profile"  component={Profile} />
                            <Route path="/guestlist"  component={GuestList} />
                            <Route path="/vendors"  component={Vendors} />
                            <Route path="/meeting"  component={Meeting} />
                            <Route path="/table"  component={Table} />
                            <Route path="/budget"  component={Budget} />
                        </div>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default DashboardIndex
