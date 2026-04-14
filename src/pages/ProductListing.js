import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/ProductListing.css';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    let result = [...products];

    // Category filter from URL or state
    const categoryParam = searchParams.get('category');
    const category = categoryParam || selectedCategory;
    
    if (category && category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    // Search filter
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy, searchParams]);

  return (
    <div className="product-listing">
      <div className="container">
        <div className="listing-header">
          <h1>Our Collection</h1>
          <p>{filteredProducts.length} Products</p>
        </div>

        <div className="listing-content">
          {/* Filters Sidebar */}
          <aside className="filters">
            <div className="filter-section">
              <h3>Category</h3>
              <div className="filter-options">
                <label>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  All Products
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'women'}
                    onChange={() => setSelectedCategory('women')}
                  />
                  Women
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'men'}
                    onChange={() => setSelectedCategory('men')}
                  />
                  Men
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'accessories'}
                    onChange={() => setSelectedCategory('accessories')}
                  />
                  Accessories
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                />
              </div>
              <input
                type="range"
                min="0"
                max="30000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="price-slider"
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-section">
            <div className="sort-bar">
              <label>
                Sort by:
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
