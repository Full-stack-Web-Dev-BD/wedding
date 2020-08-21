import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={
                props=>{
                    if(window.localStorage.getItem('w-token')){
                           return (<Redirect 
                                to={
                                    {
                                        pathname:"/dashboard",
                                        state:{
                                            from:props.location
                                        }
                                    }
                                }
                            />)
                    }else{
                        return <Component {...[props]} />
                    }
                }
            }
        
        />
    )
}

export default PublicRoute
