import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import useReveal from '../hooks/useReveal';

const ProductDetail = ({ onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));
    useReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Product not found</h2>
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--primary)', textDecoration: 'underline', marginTop: '20px', display: 'inline-block', cursor: 'pointer', fontSize: '1rem' }}>Return to Shop</button>
            </div>
        );
    }

    return (
        <div className="product-detail-page container" style={{ padding: '120px 0 80px', minHeight: '80vh' }}>
            <button
                onClick={() => navigate('/')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', textDecoration: 'none', marginBottom: '40px', display: 'inline-flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 10, fontSize: '1rem', padding: 0 }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Shop
            </button>

            <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginTop: '20px' }}>
                <div className="product-detail-image-container reveal" style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: 'var(--surface-color)', position: 'relative' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }}
                    />
                </div>

                <div className="product-detail-info reveal" style={{ animationDelay: '0.2s' }}>
                    <div className="product-category" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                        {product.category}
                    </div>
                    <h1 className="product-title" style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '20px', color: 'var(--text-color)' }}>
                        {product.title}
                    </h1>
                    <div className="product-price" style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '30px', color: 'var(--text-color)' }}>
                        AED {product.priceAED.toFixed(2)} / ${product.priceUSD.toFixed(2)}
                    </div>

                    <p className="product-description" style={{ color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '40px' }}>
                        Experience the ultimate in skincare with our premium {product.title}. Specially formulated to provide lasting results, this product is a must-have addition to your daily routine. Crafted with high-quality ingredients to nurture and protect your skin.
                    </p>

                    <div className="product-actions" style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                        <button
                            className="btn-primary"
                            onClick={() => { onAddToCart(product); alert('Added to cart!'); }}
                            style={{ width: '100%', padding: '15px', fontSize: '1.1rem', borderRadius: '10px' }}
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="product-perks" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                        <div>
                            <h4 style={{ marginBottom: '10px', fontSize: '1rem', fontWeight: '500' }}>Free Shipping</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>On all orders over $100</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px', fontSize: '1rem', fontWeight: '500' }}>Secure Checkout</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
