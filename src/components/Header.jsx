import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, hash) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/${hash}`);
        } else {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const goHome = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo(0, 0);
    };

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <a href="/" onClick={goHome} className="brand-logo-container">
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
                <li><a href="#shop" onClick={(e) => handleNavClick(e, '#shop')}>Shop</a></li>
                <li><a href="#collections" onClick={(e) => handleNavClick(e, '#collections')}>Collections</a></li>
                <li><a href="#story" onClick={(e) => handleNavClick(e, '#story')}>Our Story</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
            <div className="nav-utils">
                <a href="#" id="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </a>
                <Link to="/checkout" className="nav-icon" style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-dark)' }}>
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {cartItems.length > 0 && (
                        <span className="cart-count" style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            borderRadius: '50%',
                            width: '18px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}>
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Header;
