import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../main.css";
import Admin from "./admin/Admin";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";
import LandingPage from "./LandingPage/LandingPage";
import Login from './login/Login'
import SignUp from './signUp/SignUp'

function Layout() {
  return (
    <BrowserRouter>      
      <Header />
      <Login />
      <SignUp />
      <Switch>
        <Route path="/admin/" component={Admin} />
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
