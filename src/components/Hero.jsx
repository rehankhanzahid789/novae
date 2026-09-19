import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/hero-nature-product.jpg'
import faceImg from '../assets/lifestyle-serum-face.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Skin Reset Serum</p>
          <h1 className="hero-title">Reset. Repair. Glow.</h1>
          <p className="hero-sub">A little bottle. A lot of glow. Meet the daily serum made for better skin days.</p>
          <div className="hero-ctas">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-ghost-light">Our Story</Link>
          </div>
          <p className="hero-credit">
            Designed by <Link to="/about">Laraib Khalid</Link> &middot; Built by <Link to="/about">Rehan Zahid</Link>
          </p>
        </div>
        <div className="hero-image">
          <img src={faceImg} alt="Applying NOVAÉ Skin Reset Serum" />
        </div>
      </div>
    </section>
  )
}
