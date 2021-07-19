import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Authentication from "../au" 
export const  ProtectedRoute =({component:Component, ...rest}:any)=> {
    return (
        <Route
        {...rest}
        render={props =>{
            if(Authentication.isAuthenticated()){
                return <Component {...props}/>
            } else {
                return <Redirect to={
                    {
                        pathname:"/",
                        state:{
                            from:props.location
                        }
                    }
                }/>
            }
            
        }}
        />
    )
}
