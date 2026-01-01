import React from 'react'
import './Hero.css'
import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={heroImage} alt="HansrajVeda Ayurvedic Products" className="hero-image" />
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            Pure. Natural. <span className="highlight">Handmade.</span>
          </h1>
          <p className="hero-subtitle">
            Discover the ancient wisdom of Ayurveda through our carefully crafted, 
            100% natural wellness products. Each creation is handmade with love and traditional knowledge.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#about" className="btn btn-secondary">Our Story</a>
          </div>
        </div>
      </div>
      
      <div className="trust-badges">
        <div className="badge">
          <span className="badge-icon">🌿</span>
          <span className="badge-text">100% Natural</span>
        </div>
        <div className="badge">
          <span className="badge-icon">✋</span>
          <span className="badge-text">Handmade</span>
        </div>
        <div className="badge">
          <span className="badge-icon">🧪</span>
          <span className="badge-text">Chemical Free</span>
        </div>
        <div className="badge">
          <span className="badge-icon">✨</span>
          <span className="badge-text">Traditional Recipes</span>
        </div>
      </div>
      
      <div className="hero-pattern"></div>
    </section>
  )
}

export default Hero
