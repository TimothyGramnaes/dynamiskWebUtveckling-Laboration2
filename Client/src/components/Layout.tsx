import React from "react";
import "../main.css";
import BloggPostComponent from "./bloggPost/BloggPost";
import Header from "./header/header";
import Hero from "./hero/Hero";

function Layout() {
  return (
    <div>
      <Header />
      <BloggPostComponent></BloggPostComponent>
      {/* <Hero /> */}
      {/* // här har vi vår router */}
    </div>
  );
}

export default Layout;
