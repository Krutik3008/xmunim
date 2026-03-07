import React from 'react';
import './Contact.css';
import { Mail, MessageSquare, ShieldCheck, Zap, Globe, ArrowRight, Users } from 'lucide-react';

const Contact = () => {
    const handleEmailClick = (e, email) => {
        // We don't prevent default here to let the browser handle it naturally,
        // but we add this as an explicit backup if needed.
        console.log(`Contacting: ${email}`);
    };

    return (
        <div className="contact-page">
            <div className="contact-bg-glow glow-1"></div>
            <div className="contact-bg-glow glow-2"></div>

            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Let's Build the <br /> Future Together</h1>
                    <div className="contact-subtitle">
                        <MessageSquare size={18} />
                        <span>Responds within 24 hours</span>
                    </div>
                </div>

                <div className="contact-grid">
                    <div className="contact-card support-card">
                        <div className="card-icon-wrapper">
                            <Users size={28} />
                        </div>
                        <h2 className="card-title">General Support</h2>
                        <p className="card-desc">Facing issues with OTP, ledger entries, or account settings? Our technical team is standing by to assist you.</p>
                        <a
                            href="mailto:support@shopmunim.com"
                            className="contact-button btn-nexus"
                            onClick={(e) => handleEmailClick(e, 'support@shopmunim.com')}
                        >
                            <span>support@shopmunim.com</span>
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="contact-card business-card">
                        <div className="card-icon-wrapper">
                            <Zap size={28} />
                        </div>
                        <h2 className="card-title">Business & Partners</h2>
                        <p className="card-desc">Looking to scale your retail chain or integrate our API? Connect with our business development team.</p>
                        <a
                            href="mailto:business@shopmunim.com"
                            className="contact-button btn-nexus"
                            onClick={(e) => handleEmailClick(e, 'business@shopmunim.com')}
                        >
                            <span>business@shopmunim.com</span>
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="contact-card security-card">
                        <div className="card-icon-wrapper">
                            <ShieldCheck size={28} />
                        </div>
                        <div className="security-content">
                            <h2 className="card-title">Legal & Security</h2>
                            <p className="card-desc">Data privacy and security reports.</p>
                            <a
                                href="mailto:compliance@shopmunim.com"
                                className="contact-button btn-nexus"
                                onClick={(e) => handleEmailClick(e, 'compliance@shopmunim.com')}
                            >
                                <span>compliance@shopmunim.com</span>
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="location-footer">
                    <div className="location-divider"></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
                        <Globe size={18} color="#94a3b8" />
                        <span style={{ fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Headquarters</span>
                    </div>
                    <p>Vadodara, Gujarat, India</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
