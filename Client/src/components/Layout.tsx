import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../main.css";
import Admin from "./admin/Admin";
import Header from "./header/header";
import Hero from "./hero/Hero";

function Layout() {
  return (
    <BrowserRouter>      
      <Header />
      <Switch>
        <Route path="/admin/" component={Admin} />
        <Route path="/" component={Hero} />
      </Switch>
      {/* // här har vi vår router */}
    </BrowserRouter>
  );
}

export default Layout;
