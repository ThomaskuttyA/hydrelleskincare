import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="brand-logo-container" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none' }}>
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
                    </Link>
                    <p style={{ marginTop: '20px' }}>Nurturing your natural glow since 2024.</p>
                </div>
                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">Shop All</a></li>
                        <li><a href="#">Serum</a></li>
                        <li><a href="#">Cleanser</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                        <a href="https://www.instagram.com/hydrelle.skincare?igsh=MWp0azlnOGI0YzlnZQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Instagram</a>
                        <a href="https://www.facebook.com/share/18DaiRVLJN/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Facebook</a>
                        <a href="https://www.amazon.ae/s?me=A9209H9CKPLQW&fbclid=IwdGRjcAQSOyJjbGNrBBI7GmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHvmeie3Cm_Oym_T5KPQHPYLMmQAmZNfqNX_786VTFUFm2osrFR4T1jZcx4Zy_aem_2TcwxBLEezyufAL8_DA4kQ&marketplaceID=A2VIGQ35RCS4UG" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Amazon</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
