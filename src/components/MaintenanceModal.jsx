import React, { useEffect } from 'react'
import './MaintenanceModal.css'

export default function MaintenanceModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="maint-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="maint-card" onClick={(e) => e.stopPropagation()}>
        <div className="maint-mark">N</div>
        <p className="eyebrow" style={{ marginBottom: 14 }}>Skin Reset Serum</p>
        <h3 className="maint-title">Sorry, website down for maintenance.</h3>
        <p className="maint-copy">
          We&rsquo;re giving something behind the scenes its own little reset. Please check back shortly.
        </p>
        <button className="btn btn-primary btn-block" onClick={onClose}>Got it</button>
      </div>
    </div>
  )
}
