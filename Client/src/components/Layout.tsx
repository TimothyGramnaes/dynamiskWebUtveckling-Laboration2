import React from "react";
import "../main.css";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";
import LandingPage from "./LandingPage/LandingPage";

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <LandingPage />
      <Footer />
      {/* // här har vi vår router */}
    </div>
  );
}

export default Layout;
