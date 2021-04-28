import React from 'react';
import { Link } from 'react-router-dom';
import illustration from '../../images/Hero-Illustration.svg';
import './hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <div className="hero-buttons">
          <Link to="/login">
            <button className="primary-hero-btn">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="secondary-hero-btn">Sign Up</button>
          </Link>
        </div>
      </div>
      <img className="hero-img" src={illustration} alt="Illustration"/>
    </div>
  )
}

export default Hero
