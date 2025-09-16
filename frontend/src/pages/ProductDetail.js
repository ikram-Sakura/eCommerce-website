import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await productService.getProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (!product) {
    return <div className="error-container">Product not found</div>;
  }

  const images = [product.image_url, ...(product.gallery_images || [])];

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { product, quantity });
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
              />
            </div>
            <div className="image-thumbnails">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price">${product.price}</div>
            
            <div className="product-meta">
              <span className="category">{product.category?.name}</span>
              <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-specs">
              <h3>Specifications</h3>
              <div className="specs-grid">
                <div className="spec">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">{product.material || 'Solid Wood'}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Dimensions:</span>
                  <span className="spec-value">{product.dimensions || 'N/A'}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">{product.weight || 'N/A'}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Color:</span>
                  <span className="spec-value">{product.color || 'Natural'}</span>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>

              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                Add to Cart
              </button>

              <button className="wishlist-btn">
                ❤️ Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;