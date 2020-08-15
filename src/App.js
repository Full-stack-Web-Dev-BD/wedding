import React from 'react'
import { BrowserRouter , Route , Switch, Redirect} from 'react-router-dom'
import DashboardIndex from './component/PrivateComponent/Dashboard/DashboardIndex'
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={DashboardIndex}/>
                <Redirect from ='/' to ='/dashboard'/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
