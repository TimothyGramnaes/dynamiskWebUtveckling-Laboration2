import React from "react"
import '../main.css'
import Admin from "./admin/Admin"
import Header from "./header/header"

function Layout() {

    return (
        <div>
            <Header />
            <Admin />
            {/* // här har vi vår router */}
        </div>
    )
}

export default Layout