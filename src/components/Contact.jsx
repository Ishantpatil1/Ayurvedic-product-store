import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-subtitle">
            Have questions or feedback? We're here to help! Reach out through any of the channels below.
          </p>
        </div>

        <div className="contact-content">
          {/* Feedback Section */}
          <div className="feedback-section">
            <div className="feedback-card">
              <div className="feedback-icon">💬</div>
              <h3>Share Your Feedback</h3>
              <p>We'd love to hear your thoughts and suggestions about HansrajVeda products and services. Your feedback helps us improve!</p>
              <button 
                className="btn-feedback"
                onClick={() => window.open('https://forms.gle/C9iNPnGr6gsEN9CF7', '_blank')}
              >
                Share Feedback
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card email-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p className="contact-detail">hansrajvedaa1@gmail.com</p>
              <p className="contact-time">Typically reply within 24 hours</p>
            </div>

            <div className="info-card phone-card">
              <div className="info-icon">📱</div>
              <h3>Call Us</h3>
              <p className="contact-detail">+91 9545103610</p>
              <p className="contact-time">Mon-Sat: 9 AM - 6 PM IST</p>
            </div>

            <div className="info-card whatsapp-card">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p className="contact-detail">+91 9604086984</p>
              <button 
                className="btn-contact"
                onClick={() => window.open('https://wa.me/919604086984', '_blank')}
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
