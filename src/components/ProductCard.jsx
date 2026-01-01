import React from 'react'
import './ProductCard.css'

function ProductCard({ product, onClick }) {
  const handleAddToCart = (e) => {
    e.stopPropagation() // Prevent card click event
    window.open('https://forms.gle/T6WE2YcEryBMnqA17', '_blank')
  }

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-benefit">{product.benefit}</p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price-current">₹{product.price}</span>
            {product.originalPrice && (
              <span className="price-original">₹{product.originalPrice}</span>
            )}
          </div>
          <button className="btn-add-cart" onClick={handleAddToCart}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
