import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MaintenanceModal from '../components/MaintenanceModal.jsx'
import logo from '../assets/logo-dark.png'
import './Auth.css'

export default function Login() {
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
          <p className="eyebrow center" style={{ marginBottom: 8 }}>Welcome Back</p>
          <h1 className="auth-title">Log In</h1>
          <p className="auth-sub">Pick up your routine right where you left off.</p>

          <form onSubmit={onSubmit}>
            <div className="field">
              <label>Email</label>
              <input type="email" required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" required placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
              Log In
            </button>
          </form>

          <p className="auth-switch">
            Don&rsquo;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

      <MaintenanceModal open={showMaintenance} onClose={() => setShowMaintenance(false)} />
    </div>
  )
}
