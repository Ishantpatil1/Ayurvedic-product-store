import React, { useState } from 'react'
import './Products.css'
import ProductCard from './ProductCard'

// Import product images from assets
import hairCareKitImg from '../assets/Hair Care Kit.png'
import hairOilImg from '../assets/Hair Oil.png'
import shampooImg from '../assets/Shampoo.png'
import conditionerImg from '../assets/Conditioner.png'
import internalMedicineImg from '../assets/Internal Medicine.png'
import facePackImg from '../assets/Ayurvedic Face Pack for all skin.png'
import stretchMarksOilImg from '../assets/Stretch marks oil.png'
import suvarnaPrashanImg from '../assets/Suvarna Prashan.png'

// HansrajVeda Real Products Catalog
const ayurvedicProducts = [
  {
    id: 1,
    name: "Hair Care Kit",
    category: "Hair Care",
    benefit: "Provide internal and external nourishment to your hair",
    price: 1500,
    image: hairCareKitImg,
    badge: "Complete Kit",
    ingredients: ["Hair Oil", "Shampoo", "Conditioner", "Internal Medicine"],
    usage: "Complete hair care routine for best results",
    benefits: ["Complete nourishment", "Reduces hair fall", "Promotes growth"],
    inStock: true
  },
  {
    id: 2,
    name: "Hair Oil",
    category: "Hair Care",
    benefit: "Deeply nourishes roots, reduces hair fall, and boosts natural hair growth",
    price: 325,
    image: hairOilImg,
    badge: "Bestseller",
    ingredients: ["Bhringraj", "Amla", "Brahmi", "Coconut Oil", "Hibiscus"],
    usage: "Massage into scalp, leave overnight, wash next morning",
    benefits: ["Deeply nourishes roots", "Reduces hair fall", "Boosts natural growth"],
    inStock: true
  },
  {
    id: 3,
    name: "Shampoo",
    category: "Hair Care",
    benefit: "Gently cleanses the scalp while strengthening hair naturally",
    price: 450,
    image: shampooImg,
    ingredients: ["Ayurvedic herbs", "Natural cleansers", "Protein complex"],
    usage: "Apply to wet hair, massage gently, rinse thoroughly",
    benefits: ["Gentle cleansing", "Strengthens hair", "Natural formula"],
    inStock: true
  },
  {
    id: 4,
    name: "Conditioner",
    category: "Hair Care",
    benefit: "Locks in moisture for soft, smooth, and manageable hair",
    price: 375,
    image: conditionerImg,
    ingredients: ["Natural moisturizers", "Herbal extracts", "Essential oils"],
    usage: "Apply after shampooing, leave for 2-3 minutes, rinse well",
    benefits: ["Locks moisture", "Soft & smooth hair", "Easy manageability"],
    inStock: true
  },
  {
    id: 5,
    name: "Internal Medicine (Hair Care)",
    category: "Hair Care",
    benefit: "Controls hair fall by healing and nourishing from within",
    price: 399,
    image: internalMedicineImg,
    badge: "New",
    ingredients: ["Ayurvedic herbs", "Natural vitamins", "Minerals"],
    usage: "Take as directed by the physician",
    benefits: ["Controls hair fall", "Internal nourishment", "Holistic healing"],
    inStock: true
  },
  {
    id: 6,
    name: "Ayurvedic Face Pack",
    category: "Skincare",
    benefit: "Detoxifies skin, enhances natural glow, and reveals clear, healthy skin",
    price: 299,
    image: facePackImg,
    badge: "All Skin Types",
    ingredients: ["Neem", "Turmeric", "Multani Mitti", "Sandalwood", "Rose"],
    usage: "Apply on clean face, leave for 15-20 minutes, rinse with warm water",
    benefits: ["Detoxifies skin", "Enhances glow", "Clear healthy skin"],
    inStock: true
  },
  {
    id: 7,
    name: "Stretch Marks Oil",
    category: "Body Care",
    benefit: "Pure, pregnancy-safe oil for soft, healthy skin",
    price: 375,
    image: stretchMarksOilImg,
    badge: "Pregnancy Safe",
    ingredients: ["Natural oils", "Vitamin E", "Essential nutrients"],
    usage: "Massage gently on affected areas twice daily",
    benefits: ["Reduces stretch marks", "Pregnancy safe", "Soft healthy skin"],
    inStock: true
  },
  {
    id: 8,
    name: "Suvarna Prashan",
    category: "Children's Health",
    benefit: "A golden start for your child's immunity, intelligence & health",
    price: 999,
    image: suvarnaPrashanImg,
    badge: "Premium",
    ingredients: ["Pure Gold (Suvarna)", "Ayurvedic herbs", "Natural immunity boosters"],
    usage: "Administer as per Ayurvedic guidelines",
    benefits: ["Boosts immunity", "Enhances intelligence", "Overall health"],
    inStock: true
  }
]

const categories = ["All", "Hair Care", "Skincare", "Body Care", "Children's Health"]

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = ayurvedicProducts.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0 // featured (original order)
  })

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="section-title">Our Ayurvedic Collection</h2>
          <p className="section-subtitle">
            Handcrafted with ancient wisdom and pure natural ingredients
          </p>
        </div>

        {/* Filters */}
        <div className="products-filters">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sort-filter">
            <label htmlFor="sort">Sort by:</label>
            <select 
              id="sort" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => console.log('Product clicked:', product.id)}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </section>
  )
}

export default Products
