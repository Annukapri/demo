import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, toggleWishlist, isInWishlist } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="secondary-btn" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="product-detail">
      {showNotification && (
        <div className="notification">
          Product added to cart! <Link to="/cart">View Cart</Link>
        </div>
      )}

      <div className="container">
        <div className="product-main">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-details">
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
              <span>({product.rating} rating)</span>
            </div>

            <p className="product-price">₹{product.price.toLocaleString()}</p>

            <p className="product-description">{product.description}</p>

            {/* Size Selection */}
            <div className="size-selection">
              <h3>Select Size</h3>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button
                className={`wishlist-action-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Product Details */}
            <div className="product-meta">
              <p><strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
              <p><strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
