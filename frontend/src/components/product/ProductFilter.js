import React, { useState } from 'react';
import './ProductFilter.css';

const ProductFilter = ({ onFilter, categories }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: '',
    featured: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      category: '',
      minPrice: '',
      maxPrice: '',
      search: '',
      featured: ''
    };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  return (
    <div className="product-filter">
      <h3>Filter Products</h3>
      
      <div className="filter-group">
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          value={filters.search}
          onChange={handleChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            value={filters.minPrice}
            onChange={handleChange}
            className="filter-input"
          />
          <span>-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
      </div>

      <div className="filter-group">
        <select
          name="featured"
          value={filters.featured}
          onChange={handleChange}
          className="filter-select"
        >
          <option value="">All Products</option>
          <option value="true">Featured Only</option>
        </select>
      </div>

      <button onClick={clearFilters} className="clear-filters-btn">
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilter;