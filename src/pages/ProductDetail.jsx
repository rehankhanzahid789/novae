import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProduct, products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProduct(id)
  const { addItem } = useCart()

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container section center">
        <h2 className="section-title">Product not found</h2>
        <p className="section-sub center" style={{ margin: '16px auto 28px' }}>
          That product may have moved. Take a look at the full line instead.
        </p>
        <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
      </div>
    )
  }

  const onAddToCart = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const onBuyNow = () => {
    addItem(product, qty)
    navigate('/checkout')
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 2)

  return (
    <div className="pd-page">
      <section className="section-tight">
        <div className="container pd-grid">
          <div className="pd-gallery">
            <div className="rounded-img pd-main-image">
              <img src={product.gallery[activeImg]} alt={product.name} />
            </div>
            <div className="pd-thumbs">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  className={`pd-thumb ${activeImg === i ? 'pd-thumb-active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="pd-info">
            <p className="eyebrow">{product.size}</p>
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-claim">{product.claim}</p>
            <p className="pd-price">${product.price}</p>

            <div className="pd-ingredients">
              {product.ingredients.map((ing) => (
                <span key={ing} className="pill">{ing}</span>
              ))}
            </div>

            <hr className="divider" style={{ margin: '28px 0' }} />

            <div className="pd-purchase-row">
              <div className="qty-stepper">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">&minus;</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button className={`btn btn-primary pd-add ${added ? 'is-added' : ''}`} onClick={onAddToCart}>
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
            <button className="btn btn-dark btn-block" style={{ marginTop: 14 }} onClick={onBuyNow}>
              Buy Now
            </button>

            <div className="pd-tabs">
              <div className="pd-tab-headers">
                <button
                  className={tab === 'description' ? 'pd-tab-active' : ''}
                  onClick={() => setTab('description')}
                >
                  Description
                </button>
                <button
                  className={tab === 'directions' ? 'pd-tab-active' : ''}
                  onClick={() => setTab('directions')}
                >
                  Directions
                </button>
              </div>
              <p className="pd-tab-body">
                {tab === 'description' ? product.description : product.directions}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight pd-related">
        <div className="container">
          <p className="eyebrow center" style={{ marginBottom: 12 }}>You Might Also Like</p>
          <h2 className="section-title center" style={{ marginBottom: 40 }}>Round out your routine</h2>
          <div className="products-grid" style={{ gridTemplateColumns: `repeat(${related.length}, 1fr)` }}>
            {related.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
