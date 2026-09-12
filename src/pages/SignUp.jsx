import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MaintenanceModal from '../components/MaintenanceModal.jsx'
import logo from '../assets/logo-dark.png'
import './Auth.css'

export default function SignUp() {
  const [showMaintenance, setShowMaintenance] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setShowMaintenance(true)
  }

  return (
    <div className="auth-page">
      <div className="container auth-container">
        <div className="auth-card card">
          <img src={logo} alt="NOVAÉ" className="auth-logo" />
          <p className="eyebrow center" style={{ marginBottom: 8 }}>Join Us</p>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-sub">Sign up for early access, restock alerts, and skin tips.</p>

          <form onSubmit={onSubmit}>
            <div className="field">
              <label>Full Name</label>
              <input type="text" required placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" required placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input type="password" required placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
              Create Account
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>

      <MaintenanceModal open={showMaintenance} onClose={() => setShowMaintenance(false)} />
    </div>
  )
}
