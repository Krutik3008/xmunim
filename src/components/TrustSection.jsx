import React from 'react';
import './TrustSection.css';
import { ShieldCheck } from 'lucide-react';

const TrustSection = () => {
    return (
        <section className="section trust-section" id="security">
            <div className="container">
                <div className="trust-grid">
                    <div className="trust-content">
                        <h2 className="section-title">
                            Clear. <br />
                            <span className="text-muted">Transparent.</span> <br />
                            Accountable.
                        </h2>
                        <p className="trust-desc">
                            ShopMunim ensures every credit and payment is recorded instantly. Built with Role-Based Access for Shop Owners, Customers, and Admins to ensure your business numbers and ledgers are always accurate and secure.
                        </p>
                        <div className="stats-row">
                            <div className="stat-item">
                                <h3 className="stat-value">2.5M+</h3>
                                <p className="stat-label">Transactions Tracked</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value">99.9%</h3>
                                <p className="stat-label">Uptime</p>
                            </div>
                        </div>
                    </div>
                    <div className="trust-visual">
                        <div className="shield-container glass-panel">
                            <div className="shield-icon">
                                <ShieldCheck size={96} color="#10B981" strokeWidth={1.5} />
                            </div>
                            <div className="shield-rings">
                                <div className="ring r1"></div>
                                <div className="ring r2"></div>
                                <div className="ring r3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
