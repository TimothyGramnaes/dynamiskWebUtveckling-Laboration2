import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../main.css";
import Admin from "./admin/Admin";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";
import LandingPage from "./LandingPage/LandingPage";

function Layout() {
  return (
    <BrowserRouter>      
      <Header />
      <Switch>
        <Route path="/admin/" component={Admin} />
        <Route path="/" component={Hero} />
      </Switch>
      <LandingPage />
      <Footer />
      {/* // här har vi vår router */}
    </BrowserRouter>
  );
}

export default Layout;
