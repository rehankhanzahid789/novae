import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './Cart.css'

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container section center" style={{ maxWidth: 480 }}>
        <p className="eyebrow">Your Cart</p>
        <h1 className="section-title" style={{ margin: '14px 0 16px' }}>It&rsquo;s looking a little empty.</h1>
        <p className="section-sub center" style={{ marginBottom: 32 }}>
          Let&rsquo;s find your skin&rsquo;s new favorite.
        </p>
        <Link to="/shop" className="btn btn-primary">Shop the Line</Link>
      </div>
    )
  }

  return (
    <div className="container section-tight cart-page">
      <p className="eyebrow">Your Cart</p>
      <h1 className="section-title" style={{ margin: '14px 0 40px' }}>Cart</h1>

      <div className="cart-grid">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`} className="cart-item-media">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="cart-item-body">
                <div className="cart-item-top">
                  <div>
                    <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                    <p className="cart-item-size">{item.size}</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Remove">
                    Remove
                  </button>
                </div>
                <div className="cart-item-bottom">
                  <div className="qty-stepper">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>&minus;</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary card">
          <h3 style={{ fontSize: 22, marginBottom: 20 }}>Order Summary</h3>
          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <hr className="divider" style={{ margin: '18px 0' }} />
          <div className="cart-summary-row cart-summary-total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary btn-block" style={{ marginTop: 24 }}>
            Proceed to Checkout
          </Link>
          <Link to="/shop" className="btn btn-outline btn-block" style={{ marginTop: 12 }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
