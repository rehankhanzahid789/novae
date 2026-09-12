import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-face-macro-notext.jpg'
import fabricImg from '../assets/product-dark-fabric.jpg'
import handImg from '../assets/product-in-hand.jpg'
import bagImg from '../assets/brand-bag.jpg'
import './About.css'

const values = [
  { title: 'Fresh', copy: 'A modern take on skincare that never feels overdone.' },
  { title: 'Confident', copy: 'Formulas that do their job, without over-promising.' },
  { title: 'Minimal', copy: 'Fewer, better ingredients. Fewer, better products.' },
  { title: 'Science-backed', copy: 'Every ingredient is chosen for what it actually does.' },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <p className="eyebrow" style={{ color: 'rgba(255,253,250,0.8)' }}>Our Story</p>
          <h1 className="about-hero-title">Skincare, made simple again.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <p className="section-sub center about-intro-text">
            NOVAÉ is a modern skincare brand focused on helping skin reset, repair, and glow.
            We combine effective, science-backed ingredients with a fresh, approachable identity —
            making skincare feel simple, enjoyable, and easy to understand.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container about-split">
          <div className="rounded-img about-split-image">
            <img src={fabricImg} alt="Skin Reset Serum on dark fabric" />
          </div>
          <div>
            <p className="eyebrow">Brand Positioning</p>
            <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
              Clean, effective skincare — without the clinical feel.
            </h2>
            <p className="section-sub" style={{ marginBottom: 20 }}>
              We built NOVAÉ for people who want skincare that works, without wading through
              overly complicated routines or intimidating packaging. Every formula is designed
              to be genuinely effective and easy to understand — from the ingredient list to the label itself.
            </p>
            <p className="section-sub">
              Our audience is young adults who want a modern, elevated routine that still feels
              approachable — skincare that fits into real life, not around it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight about-values-section">
        <div className="container">
          <div className="center" style={{ maxWidth: 560, marginBottom: 48 }}>
            <p className="eyebrow">Brand Personality</p>
            <h2 className="section-title" style={{ margin: '14px 0' }}>What we stand for</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div className="about-value-card" key={v.title}>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{v.title}</h3>
                <p className="section-sub" style={{ fontSize: 14 }}>{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-split about-split-reverse">
          <div>
            <p className="eyebrow">The Details</p>
            <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
              Even the packaging tells the story.
            </h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              The label keeps things easy to scan: name, key claim, ingredients, size — in that
              order, every time. It&rsquo;s the same structure we bring to the whole brand:
              clear, considered, and never more complicated than it needs to be.
            </p>
            <Link to="/shop" className="btn btn-primary">Shop the Line</Link>
          </div>
          <div className="rounded-img about-split-image">
            <img src={handImg} alt="NOVAÉ Skin Reset Serum in hand" />
          </div>
        </div>
      </section>

      <section className="section-tight about-closing">
        <div className="container about-closing-grid">
          <div className="rounded-img about-closing-image">
            <img src={bagImg} alt="NOVAÉ branded packaging" />
          </div>
          <div className="center about-closing-copy">
            <h2 className="section-title" style={{ marginBottom: 18 }}>Reset. Repair. Glow.</h2>
            <p className="section-sub center">
              That&rsquo;s the whole idea. Skincare that gives your skin — and your routine — a fresh start.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
