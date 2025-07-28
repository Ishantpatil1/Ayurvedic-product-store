import React from 'react'
import './Products.css'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'

const books = [
  {
    name: "Agadtantra (Handbook)",
    desc: "Toxicology, Forensic medicine, Medical jurisprudence",
    pdf: "₹199",
    printed: "₹299",
    image: image1
  },
  {
    name: "Rasashastra evam Bhaishajya Kalpana Part 1",
    desc: "Compact guide for quick revision",
    pdf: "₹149",
    printed: "₹249",
    image: image2
  },
  {
    name: "Anatomy (Handbook)",
    desc: "Simple & Clear Concepts, Quick Guide",
    pdf: "₹149",
    printed: "₹249",
    image: image3
  }
]

function Products() {
  const orderFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd1ZaS39cKyQUz8tnJJZV3wK79_YbertEMtEGAiONQQbKebig/viewform?usp=header"

  return (
    <section className="products" id="products">
      <h2>Our Books</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <div key={index} className="card">
            {book.image && (
              <img src={book.image} alt={book.name} className="book-image" />
            )}
            <div className="card-body">
              <h3>{book.name}</h3>
              <p>{book.desc}</p>
              <p><strong>PDF:</strong> {book.pdf}</p>
              <p><strong>Printed:</strong> {book.printed}</p>
              <a href={orderFormLink} target="_blank" rel="noopener noreferrer">
                <button>Buy Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
