import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { toggleWishlist, isInWishlist } = useContext(CartContext);

  return (
    <div className="product-card fade-in">
      <div 
        className="product-image"
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <Link to={`/product/${product.id}`}>
          <img src={product.images[currentImage] || product.images[0]} alt={product.name} />
        </Link>
        
        <button 
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-rating">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span>({product.rating})</span>
        </div>
        <p className="product-price">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
