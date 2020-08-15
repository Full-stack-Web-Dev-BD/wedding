import React from 'react'
import UserList from '../UserList/UserListIndex'
import SideBar from './SideBar'


import './dashboard.css'
import DashboardHeader from './DashboardHeader'
import ToDoListIndex from '../ToDoList/ToDoListIndex'
import { Switch,Route,useRouteMatch} from 'react-router-dom'
import VisionBoard from '../visionBoard/VisionBoard'
import Profile from '../Profile/Profile'
import Stationery from '../Stationery/Stationery'
import Meeting from '../Meeting/Meeting'
import GuestList from '../GuestList/GuestList'
import Budget from '../Budget/Budget'
import Vendors from '../Vendors/Vendors'
import Table from '../Table/Table'

const DashboardIndex = () => {
    let {path,url} =useRouteMatch()
    return (
        <div className="dashboard">
            <div className="dashboardHeader">
                <DashboardHeader/>
            </div>
            <div className="dashboardSideBar">
                <SideBar url={url}/>
            </div>
            <div className="dashboardPages">
                <div style={{paddingTop:'70px'}}>
                    <Switch>
                        <Route path={`${path}/vision`}  component={VisionBoard} />
                        <Route path={`${path}/todo`}  component={ToDoListIndex} />
                        <Route path={`${path}/budget`}  component={Budget} />
                        <Route path={`${path}/vendors`}  component={Vendors} />
                        <Route path={`${path}/guestlist`}  component={GuestList} />
                        <Route path={`${path}/table`}  component={Table} />
                        <Route path={`${path}/stationery`}  component={Stationery} />
                        <Route path={`${path}/meeting`}  component={Meeting} />

                        <Route path={`${path}/profile`}  component={Profile} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default DashboardIndex
