import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cartItems, clearCart }) => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const totalAED = cartItems.reduce((sum, item) => sum + (item.priceAED || 0), 0);
    const totalUSD = cartItems.reduce((sum, item) => sum + (item.priceUSD || 0), 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Checkout Success! Thank you for your order, ${formData.name}. We will contact you soon!`);
        setIsSubmitted(true);
        clearCart();
    };

    if (isSubmitted) {
        return (
            <div className="checkout-page" style={{ padding: '120px 5%', minHeight: '60vh', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
                    Checkout Success!
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
                    Thank you for your order, {formData.name}. We will contact you soon!
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="btn-primary"
                    style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                >
                    Return to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page" style={{ padding: '120px 5%', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--text-dark)', textAlign: 'center' }}>
                Checkout
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                {/* Order Summary */}
                <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '12px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px' }}>Order Summary</h3>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
                                {cartItems.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
                                        <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '15px', background: '#fff' }} />
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>{item.title}</h4>
                                            <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>AED {item.priceAED.toFixed(2)} / ${item.priceUSD.toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '2px solid var(--text-dark)' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total</span>
                                <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>AED {totalAED.toFixed(2)} / ${totalUSD.toFixed(2)}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Checkout Form */}
                <div style={{}}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px' }}>Delivery Details</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Delivery Address *</label>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                                rows="4"
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={cartItems.length === 0}
                            style={{ padding: '15px', fontSize: '1.1rem', marginTop: '10px', opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer' }}
                        >
                            Place Order
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;
