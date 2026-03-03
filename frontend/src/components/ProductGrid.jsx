import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import useReveal from '../hooks/useReveal';

const ProductGrid = ({ onAddToCart }) => {
    useReveal();

    return (
        <section className="featured-products container" id="shop">
            <h2 className="section-title reveal">Essentials for You</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
