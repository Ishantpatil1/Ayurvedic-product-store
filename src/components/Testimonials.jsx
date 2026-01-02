import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: "Satish Sonar",
    location: "Customer",
    rating: 5,
    review: "The hair oil product is really really good and result oriented, it gets smoothy and silky. So all the best wishes for your great journey"
  },
  {
    id: 2,
    name: "Dr. Devashish Puri",
    location: "Doctor",
    rating: 5,
    review: "Using your oil since a week.. have reduced dandruff and hair fall also reduced.. it actually helps me a lot for dryness.. thank you so much"
  },
  {
    id: 3,
    name: "Dr. Smita More",
    location: "Doctor",
    rating: 5,
    review: "I used the Ayurvedic hair oil 2-3 times, hairfall reduced and hair became very soft. Thank you so much Dr. Shital"
  },
  {
    id: 4,
    name: "Mrs. Archna Charate",
    location: "Customer",
    rating: 5,
    review: "The oil you gave is very beneficial. Dandruff problem reduced and hair fall also decreased. My white hair is gradually turning black. Thank you Shital madam"
  },
  {
    id: 5,
    name: "Dr. Vaishanvi Padmvar",
    location: "Doctor",
    rating: 5,
    review: "I use the hair oil you made... in just one use hair becomes smooth and shine increased and dandruff problem is reducing. Thank you so much for such genuine product"
  },
  {
    id: 6,
    name: "Dr. Rushikesh Wankhede",
    location: "Doctor",
    rating: 5,
    review: "I've been using your hair oil for the past week. My hairfall has reduced and dryness also decreased. Thank you"
  },
  {
    id: 7,
    name: "Mrs. Kirti Pathade",
    location: "Customer",
    rating: 5,
    review: "With the oil you gave, there was a lot of difference in 8 days. Dandruff and hair fall reduced. My son also had a lot of dandruff, his dandruff also reduced a lot. Very best oil"
  },
  {
    id: 8,
    name: "Miss. Lavanya Gahane",
    location: "Customer",
    rating: 5,
    review: "I used the oil you sent for just 2 days but hair became smooth and hair fall also reduced a bit. Thank you"
  }
]

function Testimonials() {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real experiences from people who've embraced the Ayurvedic way of life
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                <span className="stars">{renderStars(testimonial.rating)}</span>
              </div>
              
              <p className="testimonial-review">"{testimonial.review}"</p>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Repeat Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Natural Products</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
