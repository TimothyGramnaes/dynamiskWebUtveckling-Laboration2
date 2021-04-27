import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../main.css";
import Admin from "./admin/Admin";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";
import LandingPage from "./LandingPage/LandingPage";
import Login from './login/Login'
import SignUp from './signUp/SignUp'
import AuthUser from './auth/AuthUser'
import { useState } from "react";

function Layout() {

  // const [auth, setAuth] = useState<boolean>()

  //   const options = {
  //       method: 'get'
  //   }
    
  //   useEffect(() => {
    
  //       fetch('/api/user/auth', options)
  //       .then(function (res){
  //           if (res.status === 200) {
  //               setAuth(true);            
  //           } else {
  //               setAuth(false)
  //           }        
  //       })
  //       .catch(function (err) {
  //           console.log(err)
  //       })    
  //   })   

  return (
    <BrowserRouter>      
      <Header />
      <Login />
      <SignUp />
      <Switch>
        <AuthUser path="/admin" />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Hero} />
        <LandingPage />
      </Switch>
      
      <Footer />
      {/* // här har vi vår router */}
    </BrowserRouter>
  );
}

export default Layout;
