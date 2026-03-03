import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card reveal">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
                <button className="add-to-cart-overlay" onClick={onAddToCart}>Add to Cart</button>
            </div>
            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">{product.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
