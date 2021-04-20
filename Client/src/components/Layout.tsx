import React from "react"
import '../main.css'
import Header from "./header/header"
import Hero from "./hero/Hero"

function Layout() {

    return (
        <div>
            <Header />
            <Hero />
            {/* // här har vi vår router */}
        </div>
    )
}

export default Layout;
