import React from 'react'
import './Header.css'
import logo from '../assets/image4.jpeg' // or .jpg/.jpeg based on your file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Saarthi Logo" className="logo-img" />
        <span>Saarthi Education</span>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
