import React from 'react';
import useReveal from '../hooks/useReveal';
import heroImage from '../assets/hero-skin.png';

const Hero = () => {
    useReveal();

    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="reveal">Pure Nature, <br /><em>Scientific Care.</em></h1>
                    <p className="reveal">Experience the perfect synergy of botanical wisdom and clinical precision for skin that radiates health.</p>
                    <a href="#shop" className="cta-button reveal">Shop the Collection</a>
                </div>
                <div className="hero-image reveal">
                    <img src={heroImage} alt="Glowing Skin" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
