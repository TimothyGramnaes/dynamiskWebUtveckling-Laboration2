import React from "react"
import '../main.css'
import Header from "./header/header"
import LandingPage from "./LandingPage/LandingPage"


function Layout() {

    return (
        <div>
            <Header />
            <LandingPage />
            {/* // här har vi vår router */}
        </div>
    )
}

export default Layout