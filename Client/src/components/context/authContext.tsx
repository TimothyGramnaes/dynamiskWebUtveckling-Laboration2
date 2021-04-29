import React, { useState, createContext, FunctionComponent, useContext, useEffect } from 'react'

export const AuthContext = createContext<Context>(undefined!);

// Typing for items in ProductProvider
type Context = {
    auth: boolean;
    getAuth: (auth:boolean) => void;
}

export const AuthProvider: FunctionComponent = ({ children }) => {
    
    const [auth, setAuth] = useState<boolean>(false)
    console.log(auth)

   
    const getAuth = (auth:boolean) => {
        
        setAuth(auth) 
        
    }

    useEffect(() => {
        const options = {
            method: 'get'
        }
        fetch('/api/user/auth', options)
        .then(function (res){  
            console.log(res)         
                // setAuth(res.ok) 
                getAuth(res.ok)   
                           
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [setAuth, auth])


    // if (auth === undefined) {
    //     return null;
    // }


    return (
        <AuthContext.Provider value={{ getAuth, auth }}>
            {children}
        </AuthContext.Provider>
    )    
};

// Custom Hooks

// Using all in ProductContext
export const useAuthContext = () => useContext<Context>(AuthContext)


