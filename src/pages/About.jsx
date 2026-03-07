import React from 'react';
import './About.css';
import { Target, Users, Zap, Globe, Rocket, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-bg-glow glow-1"></div>
            <div className="about-bg-glow glow-2"></div>
            <div className="about-bg-glow glow-3"></div>

            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-title">The Operating System <br /> for Modern Retail</h1>
                    <div className="about-subtitle">
                        <Target size={18} />
                        <span>Mission: Digitizing India's Ledgers</span>
                    </div>
                </div>

                <div className="about-grid">
                    <div className="about-card vision-card">
                        <div className="card-icon-wrapper">
                            <Rocket size={28} />
                        </div>
                        <h2 className="card-title">Our Vision</h2>
                        <p className="card-desc">Founded in 2024, ShopMunim aims to replace traditional paper-based ledger systems with a sleek, 256-bit encrypted digital ecosystem that empowers shop owners and customers alike through transparency and security.</p>
                    </div>

                    <div className="about-card why-card">
                        <div className="card-icon-wrapper">
                            <Zap size={28} />
                        </div>
                        <h2 className="card-title">Why ShopMunim?</h2>
                        <p className="card-desc">We built the "Operating System for Modern Businesses" to solve the transparency gap in credit transactions. Our platform ensures every entry is verified via OTP and accessible 24/7, anywhere in the world.</p>
                    </div>

                    <div className="about-card initiative-card">
                        <div className="card-icon-wrapper">
                            <ShieldCheck size={28} />
                        </div>
                        <h2 className="card-title">Digital India Initiative</h2>
                        <p className="card-desc">By fostering a cashless and paperless environment, we're proud to contribute to the Digital India movement, helping small vendors scale via intelligent analytics and robust data management tools.</p>
                    </div>
                </div>

                <div className="about-footer">
                    <div className="card-icon-wrapper">
                        <Globe size={28} />
                    </div>
                    <h2 className="card-title">Global Standards, Local Impact</h2>
                    <p className="card-desc">Designed with ❤️ for the future of retail. Built on trust, scaled with technology, and dedicated to the success of millions of Indian shopkeepers.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
