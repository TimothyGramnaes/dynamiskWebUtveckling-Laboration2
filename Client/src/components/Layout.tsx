import React from "react"
import '../main.css'
import Admin from "./admin/Admin"
import Header from "./header/header"
import Hero from "./hero/Hero"

function Layout() {

    return (
        <div>
            <Header />
            <Hero />
            <Admin />
            {/* // här har vi vår router */}
        </div>
    )
}

export default Layout;
