import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h2>Your Cart is Empty</h2>
          <p>Add some beautiful pieces to your collection</p>
          <Link to="/products" className="cta-btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <Link to={`/product/${item.id}`} className="item-image">
                  <img src={item.images[0]} alt={item.name} />
                </Link>

                <div className="item-details">
                  <Link to={`/product/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-size">Size: {item.size}</p>
                  <p className="item-price">₹{item.price.toLocaleString()}</p>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <div className="item-total">
                  <p>₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <line x1="10" y1="11" x2="10" y2="17"/>
                    <line x1="14" y1="11" x2="14" y2="17"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
            
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
