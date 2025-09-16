import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductCard from '../components/product/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const [productsResponse, categoriesResponse] = await Promise.all([
          productService.getProducts({ featured: true, per_page: 8 }),
          productService.getCategories()
        ]);
        
        setFeaturedProducts(productsResponse.data || []);
        setCategories(categoriesResponse.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please check if your Laravel backend is running on http://localhost:8000');
        setFeaturedProducts([]);
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function for category images
  const getCategoryImage = (categoryName) => {
    const images = {
      'Sofas': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Chairs': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Tables': 'https://unsplash.com/photos/brown-wooden-table-nME9TubZtSo/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Beds': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Storage': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Accessories': 'https://unsplash.com/photos/turned-on-pendant-lamps-Ry9WBo3qmochttps://images.unsplash.com/photo-1586023496467-9b6b2a0a2b3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    };
    return images[categoryName] || 'https://via.placeholder.com/300x200?text=Category+Image';
  };

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Space with <span className="highlight">Beautiful Furniture</span>
            </h1>
            <p className="hero-subtitle">
            Discover handcrafted furniture that combines style, comfort, and functionality 
            for your dream home.
            </p>
            <Link to="/products" className="hero-cta">
            Shop Now
            </Link>
          </div>
          <div className="hero-image">
            <img 
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Luxury furniture"
            />
          </div>
        </section>

        {/* Categories Section */}
        {categories.length > 0 && (
          <section className="categories-section">
            <div className="container">
            <h2 className="section-title">Shop by Category</h2>
            <div className="categories-grid">
              {categories.slice(0, 6).map(category => (
                <Link 
                key={category.id} 
                to={`/products?category=${category.slug}`}
                className="category-card"
                >
                <div className="category-image">
                  <img 
                    src={getCategoryImage(category.name)} 
                    alt={category.name}
                    onError={(e) => {
                    // Fallback image on error
                    e.target.src = 'https://via.placeholder.com/300x200?text=Category+Image';
                    e.target.classList.add('fade-in');
                    }}
                    className="category-img animated-img"
                  />
                </div>
                <h3 className="category-name animated-text">{category.name}</h3>
                </Link>
              ))}
            </div>
            </div>
          </section>
        )}

        {/* Featured Products Section */}
        <section className="featured-products">
          <div className="container">
            <h2 className="section-title animated-title">
              <span role="img" aria-label="star">✨</span> Featured Products
            </h2>
            <div className="products-grid">
              {featuredProducts.slice(0, 9).map(product => (
                <div className="product-card-wrapper animated-card" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="section-cta">
              <Link to="/products" className="btn btn-primary btn-animated">
                <span>View All Products</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>}
        <section className="features-section">
          <div className="container">
            <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on all orders over $499</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>All transactions are secure and encrypted</p>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <h3>30-Day Returns</h3>
              <p>Not satisfied? Return within 30 days</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guarantee</h3>
              <p>Premium quality materials and craftsmanship</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💬</div>
              <h3>Customer Support</h3>
              <p>24/7 live chat and phone support</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable materials and packaging</p>
            </div>
            </div>
          </div>
        </section>

        {/* Error message */}
      {error && (
        <div className="error-notice">
          <h3>Connection Issue</h3>
          <p>{error}</p>
          <p>Please make sure:</p>
          <ul>
            <li>Your Laravel backend is running on http://localhost:8000</li>
            <li>You have run: <code>php artisan serve</code></li>
            <li>You have run migrations: <code>php artisan migrate --seed</code></li>
          </ul>
        </div>
      )}

      {/* Empty state if no products */}
      {!isLoading && !error && featuredProducts.length === 0 && (
        <div className="empty-state">
          <h3>No Products Found</h3>
          <p>No products are available in the database.</p>
          <p>Make sure you have run: <code>php artisan migrate --seed</code></p>
        </div>
      )}
    </div>
  );
};

export default Home;