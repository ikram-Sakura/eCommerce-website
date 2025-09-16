import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductCard from '../components/product/ProductCard';
import ProductFilter from '../components/product/ProductFilter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    total: 0,
    current_page: 1,
    per_page: 12,
    last_page: 1,
    from: 0,
    to: 0
  });
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const [productsResponse, categoriesResponse] = await Promise.all([
          productService.getProducts(Object.fromEntries(searchParams)),
          productService.getCategories()
        ]);
        
        setProducts(productsResponse.data || []);
        
        // Set pagination with fallback values
        setPagination(productsResponse.meta || {
          total: productsResponse.data?.length || 0,
          current_page: 1,
          per_page: 12,
          last_page: 1,
          from: 1,
          to: productsResponse.data?.length || 0
        });
        
        setCategories(categoriesResponse.data || []);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load products. Please check your backend connection.');
        
        // Set empty states
        setProducts([]);
        setPagination({
          total: 0,
          current_page: 1,
          per_page: 12,
          last_page: 1,
          from: 0,
          to: 0
        });
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleFilter = (filters) => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    
    setSearchParams(params);
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    setSearchParams(params);
  };

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Discover our curated collection of premium furniture</p>
          {error && (
            <div className="error-notice">
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="product-list-content">
          <aside className="sidebar">
            <ProductFilter 
              onFilter={handleFilter} 
              categories={categories}
            />
          </aside>

          <main className="main-content">
            <div className="products-header">
              <p className="results-count">
                Showing {products.length} of {pagination.total} products
              </p>
            </div>

            {products.length === 0 ? (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <>
                <div className="products-grid">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {pagination.last_page > 1 && (
                  <div className="pagination">
                    {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`pagination-btn ${pagination.current_page === page ? 'active' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;