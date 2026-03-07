import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-content">
                <div className="hero-text-area">
                    <h1 className="hero-title">
                        Your Digital <br />
                        <span className="text-gradient">Ledger & Shop Manager</span>
                    </h1>
                    <p className="hero-subtitle">
                        Manage your shop, track customer balances, and create a transparent transaction history. The all-in-one app for modern shop owners and their customers.
                    </p>

                    <div className="store-badges">
                        <a href="#" className="store-badge-link" target="_blank" rel="noopener noreferrer">
                            <div className="store-badge apple-badge">
                                <div className="store-icon-wrapper">
                                    <svg viewBox="0 0 384 512" width="24" height="24" className="store-icon"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                                </div>
                                <div className="badge-text">
                                    <span className="badge-small">Download on the</span>
                                    <span className="badge-large">App Store</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="store-badge-link" target="_blank" rel="noopener noreferrer">
                            <div className="store-badge google-badge">
                                <div className="store-icon-wrapper">
                                    <svg viewBox="0 0 512 512" width="24" height="24" className="store-icon"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                </div>
                                <div className="badge-text">
                                    <span className="badge-small">Download on the</span>
                                    <span className="badge-large">Google Play</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="hero-image-area">
                    <div className="glass-panel app-mockup">
                        <div className="mockup-header">
                            <div className="dots"><span></span><span></span><span></span></div>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-transaction-list">
                                <div className="mockup-item"></div>
                                <div className="mockup-item"></div>
                                <div className="mockup-item"></div>
                                <div className="mockup-item"></div>
                            </div>
                        </div>
                        {/* Floating elements for visual depth inspired by CRED/Teamcamp */}
                        <div className="floating-card c1">Trusted by 30k+</div>
                        <div className="floating-card c2">+32% Efficiency</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
