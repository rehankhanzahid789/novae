import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-light.png'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="NOVAÉ" className="footer-logo" />
          <p className="footer-tagline">Reset. Repair. Glow.</p>

          <div className="footer-social">
            <a href="#" aria-label="Instagram" className="footer-icon"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok" className="footer-icon"><TikTokIcon /></a>
            <a href="#" aria-label="Pinterest" className="footer-icon"><PinterestIcon /></a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Shop</p>
          <Link to="/shop">All Products</Link>
          <Link to="/product/skin-reset-serum">Skin Reset Serum</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Brand</p>
          <Link to="/about">About NOVAÉ</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="footer-col footer-newsletter">
          <p className="footer-heading">Stay in the glow</p>
          <p className="footer-newsletter-copy">Skin tips and new drops, straight to your inbox.</p>
          {subscribed ? (
            <p className="footer-subscribed">You&rsquo;re on the list. See you soon.</p>
          ) : (
            <form className="footer-form" onSubmit={onSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-dark">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <hr className="divider" />
        <div className="footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} NOVAÉ. A conceptual skincare brand — portfolio project.</p>
          <p>Made with care, for skin that deserves it.</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4c.4 2.4 2 4 4.5 4.2" />
    </svg>
  )
}
function PinterestIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 18c1-3 1.5-5.5 1.5-7a3 3 0 1 1 3 3c-1 0-1.7-.4-2-1" />
    </svg>
  )
}
