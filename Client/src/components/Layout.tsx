import React from "react";
import "../main.css";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Hero from "./hero/Hero";

function Layout() {
  return (
    <div>
      <Header />

      <Hero />
      <Footer />
      {/* // här har vi vår router */}
    </div>
  );
}

export default Layout;
