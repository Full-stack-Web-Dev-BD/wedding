import React from 'react'
import { BrowserRouter , Route , Switch, Redirect} from 'react-router-dom'
import DashboardIndex from './component/PrivateComponent/Dashboard/DashboardIndex'
import Home from './component/PublicComponent/HomePage/Home'
import About from './component/PublicComponent/About/About'
import Login from './component/PublicComponent/Login/Login'
import Register from './component/PublicComponent/Register/Register'
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={DashboardIndex}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
