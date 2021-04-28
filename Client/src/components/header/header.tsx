import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <h2 className="logo">Salt<b>Factory</b></h2>
      <div className="buttons">
        <Link to="/login">
          <button className="log-in">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="sign-up border-btn">Sign Up</button>
        </Link>
        <button className="border-btn">Log Out</button>
      </div>
    </header>
  )
}

export default Header