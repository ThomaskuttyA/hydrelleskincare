import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card reveal">
            <Link to={`/product/${product.id}`} className="product-image-link" style={{ display: 'block' }}>
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
            </Link>
            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                    <h3 className="product-title">{product.title}</h3>
                </Link>
                <div className="product-price" style={{ marginTop: 'auto' }}>AED {product.priceAED.toFixed(2)} / ${product.priceUSD.toFixed(2)}</div>
                <button
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.9rem', marginTop: '10px' }}
                    onClick={() => { onAddToCart(product); alert('Added to cart!'); }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
