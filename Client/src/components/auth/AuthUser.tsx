import  React, { useEffect, useState } from 'react'
import  { Redirect, Route } from 'react-router-dom'
import Admin from '../admin/Admin'

function AuthUser({...rest}) {   
    const [auth, setAuth] = useState<boolean>()

    const view = async () => {                        
            if(auth === true) {
                <Admin />
            } else if (auth === false) {
                <Redirect to="/" />
            } else {
                return
            }
        }

    useEffect(() => {        

        const options = {
            method: 'get'
        }  
   
        fetch('/api/user/auth', options)
        .then(function (res){
            if (res.status === 200) {
                setAuth(true);   
                view()                     
            } else {
                setAuth(false)
                view()
            }        
        })
        .catch(function (err) {
            console.log(err)
        })    
        view() 
    })   

    return (
        
        <Route {...rest} render={() => {
            console.log(auth)
            return view
        }} />
        
    )       
}

export default AuthUser