import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import MaintenanceModal from '../components/MaintenanceModal.jsx'
import './Checkout.css'

export default function Checkout() {
  const { items, subtotal } = useCart()
  const [showMaintenance, setShowMaintenance] = useState(false)

  const shipping = items.length > 0 ? 6 : 0
  const total = subtotal + shipping

  const onPlaceOrder = (e) => {
    e.preventDefault()
    setShowMaintenance(true)
  }

  if (items.length === 0) {
    return (
      <div className="container section center" style={{ maxWidth: 480 }}>
        <p className="eyebrow">Checkout</p>
        <h1 className="section-title" style={{ margin: '14px 0 16px' }}>Your cart is empty.</h1>
        <p className="section-sub center" style={{ marginBottom: 32 }}>Add something to your cart before checking out.</p>
        <Link to="/shop" className="btn btn-primary">Shop the Line</Link>
      </div>
    )
  }

  return (
    <div className="container section-tight checkout-page">
      <p className="eyebrow">Checkout</p>
      <h1 className="section-title" style={{ margin: '14px 0 40px' }}>Checkout</h1>

      <form className="checkout-grid" onSubmit={onPlaceOrder}>
        <div className="checkout-form">
          <div className="checkout-block">
            <h3 className="checkout-block-title">Shipping Information</h3>
            <div className="field-row">
              <div className="field">
                <label>First Name</label>
                <input type="text" required placeholder="Jane" />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" required placeholder="Doe" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" required placeholder="jane@email.com" />
            </div>
            <div className="field">
              <label>Address</label>
              <input type="text" required placeholder="123 Glow Street" />
            </div>
            <div className="field-row">
              <div className="field">
                <label>City</label>
                <input type="text" required placeholder="City" />
              </div>
              <div className="field">
                <label>ZIP / Postal Code</label>
                <input type="text" required placeholder="00000" />
              </div>
            </div>
          </div>

          <div className="checkout-block">
            <h3 className="checkout-block-title">Payment Method</h3>
            <div className="field">
              <label>Card Number</label>
              <input type="text" required placeholder="0000 0000 0000 0000" inputMode="numeric" />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Expiration</label>
                <input type="text" required placeholder="MM / YY" />
              </div>
              <div className="field">
                <label>CVC</label>
                <input type="text" required placeholder="000" inputMode="numeric" />
              </div>
            </div>
            <div className="field">
              <label>Name on Card</label>
              <input type="text" required placeholder="Jane Doe" />
            </div>
          </div>
        </div>

        <div className="checkout-summary card">
          <h3 style={{ fontSize: 22, marginBottom: 20 }}>Order Summary</h3>
          <div className="checkout-summary-items">
            {items.map((item) => (
              <div className="checkout-summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="checkout-summary-item-info">
                  <span>{item.name}</span>
                  <span className="checkout-summary-item-qty">Qty {item.qty}</span>
                </div>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr className="divider" style={{ margin: '18px 0' }} />
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <hr className="divider" style={{ margin: '18px 0' }} />
          <div className="cart-summary-row cart-summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 24 }}>
            Place Order
          </button>
        </div>
      </form>

      <MaintenanceModal open={showMaintenance} onClose={() => setShowMaintenance(false)} />
    </div>
  )
}
