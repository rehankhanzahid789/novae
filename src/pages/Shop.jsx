import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import './Shop.css'

export default function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-header">
        <div className="container center" style={{ maxWidth: 620 }}>
          <p className="eyebrow">The Full Line</p>
          <h1 className="section-title" style={{ margin: '14px 0 16px' }}>Shop NOVAÉ</h1>
          <p className="section-sub center">
            A small, considered routine built around one goal: healthier-looking skin, one step at a time.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="products-grid shop-grid">
            {products.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
