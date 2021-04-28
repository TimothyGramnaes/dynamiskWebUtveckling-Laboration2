import React from 'react'
import './footer.css'
import linkIcon from '../../images/icons/link-icon.svg'
import logInIcon from '../../images/icons/log-in-icon.svg'
import emailIcon from '../../images/icons/email-icon.svg'
import houseIcon from '../../images/icons/house-icon.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <h2 className="logo">Salt<b>Factory</b></h2>
        <div className="top-links">
          <a href="https://musing-torvalds-76dad1.netlify.app/">
            Visit Göta Magic
            <img src={linkIcon} alt="Link"/>
          </a>
          <p className="divider">|</p>
          <Link to="/login">
            Log In Here
            <img src={logInIcon} alt="Log In"/>
          </Link>
        </div>
        <div className="contact-section">
          <a href="mailto:example@email.com">
            example@email.com
            <img src={emailIcon} alt="Email"/>
          </a>
          <p>
            Adressgatan 56, 123 45, Stadstaden
            <img src={houseIcon} alt="Addresss"/>
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © SaltFactory | 2021 - All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
