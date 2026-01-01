import React, { useState } from 'react'
import './ProductDetail.css'

function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) return null

  const images = [product.image, product.image, product.image] // In real app, multiple images

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="product-detail-content">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={images[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-details">
            <span className="product-category-badge">{product.category}</span>
            <h2 className="product-title">{product.name}</h2>
            
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">(4.8 out of 5 based on 124 reviews)</span>
            </div>

            <div className="product-price-section">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">₹{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="discount">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="product-description">{product.benefit}</p>

            {/* Ingredients */}
            <div className="detail-section">
              <h3>Key Ingredients</h3>
              <div className="ingredients-list">
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-tag">🌿 {ingredient}</span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="detail-section">
              <h3>Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>✓ {benefit}</li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="detail-section">
              <h3>How to Use</h3>
              <p>{product.usage}</p>
            </div>

            {/* Add to Cart */}
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                className="btn-add-to-cart" 
                onClick={() => window.open('https://forms.gle/T6WE2YcEryBMnqA17', '_blank')}
              >
                Buy Now - ₹{product.price * quantity}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">✓ 100% Natural</div>
              <div className="trust-item">✓ Handmade</div>
              <div className="trust-item">✓ Free Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
