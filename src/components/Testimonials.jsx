import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "The HansrajVeda Hair Oil has completely transformed my hair! My hair fall has reduced significantly, and I can see new hair growth. Love that it's all natural and handmade!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review: "I purchased the Hair Care Kit and it's worth every penny! The combination of oil, shampoo, conditioner, and internal medicine has given me amazing results. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Ananya Desai",
    location: "Bangalore",
    rating: 5,
    review: "The Ayurvedic Face Pack is absolutely wonderful! My skin feels so fresh and glowing. It works for my sensitive skin perfectly. Thank you HansrajVeda!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    review: "I used the Stretch Marks Oil during my pregnancy and it worked wonders! My skin stayed soft and healthy throughout. Safe and effective!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Kavita Patel",
    location: "Ahmedabad",
    rating: 5,
    review: "Suvarna Prashan for my child has been amazing! I can see improvements in his immunity and overall health. Traditional Ayurveda at its best!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    review: "The Hair Conditioner makes my hair so soft and manageable. Combined with their shampoo, it's the perfect natural hair care routine. No chemicals, just pure goodness!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
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
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
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
