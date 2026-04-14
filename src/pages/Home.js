import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Timeless Elegance</h1>
          <p className="fade-in">Discover luxury fashion that defines your style</p>
          <Link to="/products" className="cta-btn fade-in">Explore Collection</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <Link to="/products?category=women" className="category-card">
              <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600" alt="Women" />
              <div className="category-overlay">
                <h3>Women</h3>
              </div>
            </Link>
            <Link to="/products?category=men" className="category-card">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600" alt="Men" />
              <div className="category-overlay">
                <h3>Men</h3>
              </div>
            </Link>
            <Link to="/products?category=accessories" className="category-card">
              <img src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600" alt="Accessories" />
              <div className="category-overlay">
                <h3>Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Collection</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="secondary-btn">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>ÉLÉGANCE brings together traditional craftsmanship and contemporary design. Each piece is carefully curated to celebrate the art of luxury fashion, creating timeless pieces that transcend trends.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
