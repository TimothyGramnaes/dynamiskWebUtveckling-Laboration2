import  React, { useEffect, useState } from 'react'
import  { Redirect, Route } from 'react-router-dom'
import Admin from '../admin/Admin'

function AuthUser({...rest}) {   
    const [auth, setAuth] = useState<boolean>()

    // const view = () => {                        
    //         // if(auth === false) {
    //             <Admin />
    //         // } else  {
    //         //     <Redirect to="/admin" />
    //         // } 
    //     }

    const options = {
        method: 'get'
    }  

    fetch('/api/user/auth', options)
    .then(function (res){
        if (res.status === 200) {
            setAuth(true);                    
        } else {
            setAuth(false)
        }        
    })
    .catch(function (err) {
        console.log(err)
    })   
    useEffect(() => {        

          
    })   

    return (
        
        <Route {...rest} render={() => {
            console.log(auth)
            return <Admin />
        }} />
        
    )       
}

export default AuthUser