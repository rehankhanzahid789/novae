import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import badgeLogo from '../assets/novae-badge-logo.png'
import stonesImg from '../assets/product-stones.jpg'
import spotlightImg from '../assets/product-shadow-studio.jpg'
import lifestyleBanner from '../assets/lifestyle-bathroom.jpg'
import './Home.css'

const ingredients = [
  {
    name: 'Niacinamide',
    copy: 'Helps even tone and refine texture, so skin looks smoother and more awake.',
  },
  {
    name: 'Hyaluronic Acid',
    copy: 'Pulls moisture in and keeps it there, for that plump, dewy, well-rested look.',
  },
  {
    name: 'Ceramides',
    copy: 'Reinforces the skin barrier, helping skin hold onto hydration all day long.',
  },
]

export default function Home() {
  const heroProduct = products.find((p) => p.hero)

  return (
    <div>
      <Hero />

      {/* Brand story */}
      <section className="section">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">What is NOVAÉ</p>
            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 22 }}>
              Skincare that feels as good as it works.
            </h2>
            <p className="section-sub" style={{ maxWidth: 480 }}>
              NOVAÉ is a modern skincare brand focused on helping skin reset, repair, and glow.
              We combine effective, science-backed ingredients with a fresh, approachable identity —
              making skincare feel simple, enjoyable, and easy to understand.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: 32 }}>Our Story</Link>
          </div>
          <div className="rounded-img story-image">
            <img src={stonesImg} alt="NOVAÉ Skin Reset Serum among stones" />
          </div>
        </div>
      </section>

      {/* Hero product spotlight */}
      {heroProduct && (
        <section className="section-tight spotlight-section">
          <div className="container spotlight-grid">
            <div className="rounded-img spotlight-image">
              <img src={spotlightImg} alt={heroProduct.name} />
            </div>
            <div>
              <p className="eyebrow">Hero Product</p>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>{heroProduct.name}</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>{heroProduct.description}</p>
              <div className="spotlight-meta">
                <span>{heroProduct.size}</span>
                <span className="dot">&middot;</span>
                <span>{heroProduct.ingredients.join(' \u00b7 ')}</span>
              </div>
              <div className="spotlight-ctas">
                <span className="spotlight-price">${heroProduct.price}</span>
                <Link to={`/product/${heroProduct.id}`} className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ingredient highlights */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ maxWidth: 560, marginBottom: 56 }}>
            <p className="eyebrow">Inside The Bottle</p>
            <h2 className="section-title" style={{ margin: '14px 0' }}>Three ingredients. One goal.</h2>
            <p className="section-sub center">Everything in Skin Reset Serum earns its place — no filler, no fuss.</p>
          </div>
          <div className="ingredients-grid">
            {ingredients.map((ing, i) => (
              <div className="ingredient-card" key={ing.name}>
                <span className="ingredient-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ingredient-name">{ing.name}</h3>
                <p className="ingredient-copy">{ing.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section-tight">
        <div className="container">
          <div className="row-heading">
            <div>
              <p className="eyebrow">The Line</p>
              <h2 className="section-title" style={{ marginTop: 14 }}>Reset your whole routine.</h2>
            </div>
            <Link to="/shop" className="btn btn-outline">View All</Link>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle / testimonial section */}
      <section className="section lifestyle-section">
        <div className="container">
          <div className="lifestyle-banner">
            <div className="rounded-img lifestyle-banner-image">
              <img src={lifestyleBanner} alt="Applying NOVAÉ Skin Reset Serum at home" />
            </div>
            <div className="rounded-img lifestyle-badge">
              <img src={badgeLogo} alt="NOVAÉ logo" />
            </div>
          </div>
          <div className="lifestyle-copy-centered center">
            <p className="eyebrow">Hydrate. Glow. Repeat.</p>
            <h2 className="section-title" style={{ margin: '14px 0 20px' }}>
              &ldquo;A little bottle. A lot of glow.&rdquo;
            </h2>
            <p className="section-sub center">
              Real routines, reset with NOVAÉ. Skin Reset Serum slots into whatever you&rsquo;re
              already doing — two minutes, morning and night, for skin that looks like it&rsquo;s
              having a better day.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-tight closing-cta">
        <div className="container center" style={{ maxWidth: 560 }}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>Meet your skin&rsquo;s new favorite.</h2>
          <p className="section-sub center" style={{ marginBottom: 32 }}>
            Start your reset today — your skin will thank you tomorrow.
          </p>
          <Link to="/shop" className="btn btn-primary">Shop the Line</Link>
        </div>
      </section>
    </div>
  )
}
