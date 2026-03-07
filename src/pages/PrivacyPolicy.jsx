import React from 'react';
import './Legal.css';
import { Info } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-bg-glow glow-1"></div>
            <div className="legal-bg-glow glow-2"></div>
            <div className="legal-bg-glow glow-3"></div>

            <div className="legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Privacy Protocol</h1>
                    <div className="info-banner">
                        <Info className="info-icon" size={20} />
                        <span className="last-updated">Status: Active (Last Updated Feb 2026)</span>
                    </div>
                    <p className="section-label">LEGAL COMPLIANCE</p>
                </div>

                <div className="legal-content">
                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">01</div>
                            <h2 className="policy-title">Data Collection</h2>
                        </div>
                        <div className="policy-body">
                            <p>We collect information necessary for ledger management, including your name, phone number, and transaction history with connected shops.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">02</div>
                            <h2 className="policy-title">Data Usage</h2>
                        </div>
                        <div className="policy-body">
                            <p>Your data is used solely to maintain your financial records, provide account notifications, and ensure secure login via OTP.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">03</div>
                            <h2 className="policy-title">Account Security</h2>
                        </div>
                        <div className="policy-body">
                            <p>We use 256-bit encryption for all data storage. Your transaction records are private between you and the respective shop owner.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">04</div>
                            <h2 className="policy-title">Your Rights</h2>
                        </div>
                        <div className="policy-body">
                            <p>You have the right to export your data or delete your account at any time through the Privacy & Security settings.</p>
                        </div>
                    </div>
                </div>

                <div className="legal-footer">
                    <p>Questions regarding our privacy protocol? <br /> Reach out to our compliance team at support@shopmunim.com</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
