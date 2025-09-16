import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch();

    if (!product) {
        return <div className="product-card product-card-empty">Product not available</div>;
    }

    const handleAddToCart = () => {
        setIsAdding(true);
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.image_url,
            category: product.category?.name || 'Uncategorized',
            quantity: 1
        }));
        setTimeout(() => setIsAdding(false), 600);
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="product-card animated-card">
            <div className="product-image-container">
                <Link to={`/product/${product.id}`} className="image-link">
                    <img 
                        src={product.image_url || 'https://via.placeholder.com/300x200?text=No+Image'} 
                        alt={product.name || 'Product image'}
                        className="product-image"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                        }}
                    />
                </Link>
                {product.featured && <span className="featured-badge bounce">⭐ Featured</span>}
                <button 
                    className={`wishlist-btn ${isWishlisted ? 'wishlisted pulse' : ''}`}
                    onClick={handleWishlist}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    {isWishlisted ? '❤️' : '🤍'}
                </button>
                <div className="quick-view">
                    <Link to={`/product/${product.id}`} className="quick-view-btn slide-in">
                        Quick View
                    </Link>
                </div>
            </div>
            <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-name">
                    {product.name || 'Unnamed Product'}
                </Link>
                <div className="product-category">
                    {product.category?.name || 'Uncategorized'}
                </div>
                <div className="product-price">${product.price || '0.00'}</div>
                <div className="product-rating">
                    <div className="stars">★★★★★</div>
                    <span className="rating-count">(42)</span>
                </div>
                <div className="product-actions">
                    <button 
                        className={`add-to-cart-btn ${isAdding ? 'adding shake' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAdding}
                    >
                        {isAdding ? '✓ Added' : '🛒 Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
