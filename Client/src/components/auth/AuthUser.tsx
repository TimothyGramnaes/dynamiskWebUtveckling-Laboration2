import  React, { useEffect, useState } from 'react'
import  { Route } from 'react-router-dom'
import Admin from '../admin/Admin'
import {useHistory} from 'react-router-dom'
import Login from '../login/Login'
import { useAuthContext } from "../context/authContext"

function AuthUser({...rest}) {   
    const getAuthContext = useAuthContext();
    const [auth, setAuth] = useState<boolean>(getAuthContext.auth)
    console.log(auth)
    

    useEffect(() => {
        const options = {
            method: 'get'
        }
        fetch('/api/user/auth', options)
        .then(function (res){  
            console.log(res)         
                setAuth(res.ok) 
                // getAuthContext.getAuth(res.ok)   
                           
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [setAuth, auth, getAuthContext])


    if (auth === undefined) {
        return null;
    }

    return (
        
        <Route {...rest} render={ () => {
            return auth === true
            ? <Admin />
            : <Login />
        }} />
        
    )       
}

export default AuthUser