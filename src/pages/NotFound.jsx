import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section center" style={{ maxWidth: 480, minHeight: '50vh' }}>
      <p className="eyebrow">404</p>
      <h1 className="section-title" style={{ margin: '14px 0 16px' }}>Page not found.</h1>
      <p className="section-sub center" style={{ marginBottom: 32 }}>
        Looks like this page took its own reset. Let&rsquo;s get you back on track.
      </p>
      <Link to="/" className="btn btn-primary">Back Home</Link>
    </div>
  )
}
