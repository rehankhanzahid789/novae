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

          <div className="footer-credits">
            <a
              href="https://www.linkedin.com/in/dev-rehan-zahid/"
              target="_blank"
              rel="noreferrer"
              className="footer-credit-link"
            >
              <LinkedInIcon />
              <span>
                <strong>Rehan Zahid</strong>
                <em>Developer</em>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/laraibkhalid-/"
              target="_blank"
              rel="noreferrer"
              className="footer-credit-link"
            >
              <LinkedInIcon />
              <span>
                <strong>Laraib Khalid</strong>
                <em>Designer</em>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Shop</p>
          <Link to="/shop">All Products</Link>
          <Link to="/product/skin-reset-serum">Skin Reset Serum</Link>
          <Link to="/product/daily-sun-block">Daily Sun Block</Link>
          <Link to="/product/under-eye-cream">Under Eye Cream</Link>
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

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.98h4V21H3V9.98ZM9.5 9.98H13v1.51h.05c.5-.9 1.7-1.85 3.5-1.85 3.75 0 4.45 2.4 4.45 5.53V21h-4v-5.3c0-1.27-.02-2.9-1.78-2.9-1.78 0-2.05 1.37-2.05 2.8V21h-4V9.98Z" />
    </svg>
  )
}
