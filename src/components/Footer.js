import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ÉLÉGANCE</h3>
            <p>Redefining luxury fashion with timeless elegance and contemporary design.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/products">Shop All</Link></li>
              <li><Link to="/products?category=women">Women</Link></li>
              <li><Link to="/products?category=men">Men</Link></li>
              <li><Link to="/products?category=accessories">Accessories</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 ÉLÉGANCE. All rights reserved. | Designed for Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
