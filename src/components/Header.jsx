import React, { useState, useEffect } from 'react';

const Header = ({ cartCount }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <a href="#" className="brand-logo-container">
                <div className="brand-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2.5c-2.5 4-4.5 6.5-4.5 9.5a4.5 4.5 0 0 0 9 0c0-3-2-5.5-4.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15c-.5.5-1.5 1-2.5 1h-7a2 2 0 0 1-2-2V8.5l-4 4L4.5 13A2.5 2.5 0 0 1 7 15.5h7c1 0 2-.5 2.5-1l3-1.5-2.5-2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="brand-divider"></div>
                    <div className="brand-letter">H</div>
                </div>
                <div className="brand-name">HYDRELLE</div>
                <div className="brand-tagline">RADIANCE REDEFINED</div>
            </a>
            <ul className="nav-links">
                <li><a href="#shop">Shop</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-utils">
                <a href="#" id="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </a>
                <a href="#" id="cart-btn" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span>({cartCount})</span>
                </a>
            </div>
        </nav>
    );
};

export default Header;
