import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">HansrajVeda</span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#products" onClick={closeMenu}>Products</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
