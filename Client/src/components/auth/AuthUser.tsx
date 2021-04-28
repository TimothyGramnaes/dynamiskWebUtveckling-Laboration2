import  React, { useEffect, useState } from 'react'
import  { Redirect, Route } from 'react-router-dom'
import Admin from '../admin/Admin'

function AuthUser({...rest}) {   
    const [auth, setAuth] = useState<boolean>(false)

    

    const options = {
        method: 'get'
    }  

    fetch('/api/user/auth', options)
    .then(function (res){
        if (res.status === 200) {
            setAuth(res.ok)                   
        } else {
            setAuth(res.ok)
        }        
    })
    .catch(function (err) {
        console.log(err)
    })   
    


    

    return (
        
        <Route {...rest} render={ () => {
            console.log(auth)
            return auth === true
            ? <Admin />
            : <Redirect to="/login" />
        }} />
        
    )       
}

export default AuthUser