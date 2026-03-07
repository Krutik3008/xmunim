import React from 'react';
import './Legal.css';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-header text-center">
                    <h1 className="legal-title">About ShopMunim</h1>
                    <div className="info-banner">
                        <Target className="info-icon" size={20} color="#00FFCC" />
                        <span className="last-updated">Our Mission: Digitizing India's Ledgers</span>
                    </div>
                    <p className="section-label">THE STORY BEHIND THE OS</p>
                </div>

                <div className="legal-content">
                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">01</div>
                            <h2 className="policy-title">Our Vision</h2>
                        </div>
                        <div className="policy-body">
                            <p>Founded in 2024, ShopMunim aims to replace traditional paper-based ledger systems with a sleek, 256-bit encrypted digital ecosystem that empowers shop owners and customers alike.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">02</div>
                            <h2 className="policy-title">Why ShopMunim?</h2>
                        </div>
                        <div className="policy-body">
                            <p>We built "The Operating System for Modern Businesses" to solve the transparency gap in credit transactions. Our platform ensures every entry is verified via OTP and accessible 24/7.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">03</div>
                            <h2 className="policy-title">Digital India Initiative</h2>
                        </div>
                        <div className="policy-body">
                            <p>By fostering a cashless and paperless environment, we're proud to contribute to the Digital India movement, helping small vendors scale via intelligent analytics and secure data management.</p>
                        </div>
                    </div>
                </div>

                <div className="legal-footer">
                    <p>Designed with ❤️ for the future of retail. <br /> Built on trust, scaled with technology.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
