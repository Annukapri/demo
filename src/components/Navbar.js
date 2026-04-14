import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">ÉLÉGANCE</Link>
          
          <ul className="nav-links">
            <li><Link to="/products?category=women">Women</Link></li>
            <li><Link to="/products?category=men">Men</Link></li>
            <li><Link to="/products?category=accessories">Accessories</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>

          <div className="nav-icons">
            <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            
            <Link to="/cart" className="icon-btn cart-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
