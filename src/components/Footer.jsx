import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">HansrajVeda</span>
          </div>
          <p className="brand-tagline">
            Bringing ancient Ayurvedic wisdom to modern wellness. 
            Pure, natural, and handcrafted with love.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <span>f</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <span>💬</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Shop Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="footer-section">
          <h3 className="footer-title">Categories</h3>
          <ul className="footer-links">
            <li><a href="#products">Hair Care</a></li>
            <li><a href="#products">Skincare</a></li>
            <li><a href="#products">Body Care</a></li>
            <li><a href="#products">Children's Health</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-section">
          <h3 className="footer-title">Customer Care</h3>
          <ul className="footer-links">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} HansrajVeda. All rights reserved. | Handcrafted with ❤️ in India
        </p>
        <div className="payment-methods">
          <span>💳 Secure Payment</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
