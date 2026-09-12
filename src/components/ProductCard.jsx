import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const onAdd = () => {
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-media">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-card-body">
        <Link to={`/product/${product.id}`} className="product-card-name">{product.name}</Link>
        <p className="product-card-claim">{product.claim}</p>
        <div className="product-card-footer">
          <span className="product-card-price">${product.price}</span>
          <button className={`btn btn-outline product-card-btn ${added ? 'is-added' : ''}`} onClick={onAdd}>
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
