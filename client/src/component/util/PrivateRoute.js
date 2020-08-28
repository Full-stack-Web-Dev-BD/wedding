import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({component:Component,...rest}) => {


    return (
        <Route
            {...rest}
            render={
                props=>{
                    if(window.localStorage.getItem('w-token')){
                        return <Component {...[props]} />
                    }else{
                        return (
                            <Redirect
                                to={
                                    {
                                        pathname:"/login",
                                        state:{
                                            from:props.location
                                        }
                                    }
                                }
                            />
                        )
                    }
                }
            }
        
        />
    )
}

export default PrivateRoute
