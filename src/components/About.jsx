import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About HansrajVeda</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="about-content">
          {/* Brand Story */}
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              HansrajVeda was born from a deep reverence for ancient Ayurvedic wisdom and a 
              commitment to bringing pure, authentic wellness to modern lives. Founded by practitioners 
              who witnessed the transformative power of traditional remedies, we've dedicated ourselves 
              to preserving and sharing the precious knowledge passed down through generations.
            </p>
            <p>
              Every product in our collection is handcrafted with love, using time-honored recipes 
              and 100% natural ingredients sourced from sustainable farms. We believe that true wellness 
              comes from harmony with nature, and our mission is to help you rediscover this ancient connection.
            </p>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <span className="leaf-icon">🌿</span>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="philosophy-section">
          <h3 className="philosophy-title">Our Philosophy</h3>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="card-icon">🌱</div>
              <h4>Pure & Natural</h4>
              <p>We use only the finest natural ingredients, free from chemicals, preservatives, and artificial additives.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="card-icon">✋</div>
              <h4>Handmade with Love</h4>
              <p>Each product is carefully handcrafted in small batches, ensuring quality and preserving traditional methods.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="card-icon">📚</div>
              <h4>Ancient Wisdom</h4>
              <p>Our formulations are based on centuries-old Ayurvedic texts and traditional family recipes.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="card-icon">✨</div>
              <h4>Holistic Wellness</h4>
              <p>We believe in treating the whole person - body, mind, and spirit - for true, lasting health.</p>
            </div>
          </div>
        </div>

        {/* Purity Promise */}
        <div className="promise-section">
          <h3>Our Purity Promise</h3>
          <div className="promise-content">
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>100% Natural Ingredients</span>
            </div>
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>No Chemicals or Preservatives</span>
            </div>
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>Cruelty-Free & Vegan</span>
            </div>
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>Sustainably Sourced</span>
            </div>
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>Handcrafted in Small Batches</span>
            </div>
            <div className="promise-item">
              <span className="check-icon">✓</span>
              <span>Traditional Ayurvedic Recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
