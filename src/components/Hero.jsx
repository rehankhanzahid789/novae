import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-nature-product.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Skin Reset Serum</p>
        <h1 className="hero-title">Reset. Repair. Glow.</h1>
        <p className="hero-sub">A little bottle. A lot of glow. Meet the daily serum made for better skin days.</p>
        <div className="hero-ctas">
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          <Link to="/about" className="btn btn-ghost-light">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
