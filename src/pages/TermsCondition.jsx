import React from 'react';
import './Legal.css';
import { Info } from 'lucide-react';

const TermsCondition = () => {
    return (
        <div className="legal-page">
            <div className="legal-bg-glow glow-1"></div>
            <div className="legal-bg-glow glow-2"></div>
            <div className="legal-bg-glow glow-3"></div>

            <div className="legal-container">
                <div className="legal-header">
                    <h1 className="legal-title">Terms of Service</h1>
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
                            <h2 className="policy-title">Acceptance of Terms</h2>
                        </div>
                        <div className="policy-body">
                            <p>By using XMunim, you agree to these terms and conditions. If you do not agree, please discontinue use of the application.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">02</div>
                            <h2 className="policy-title">Accurate Records</h2>
                        </div>
                        <div className="policy-body">
                            <p>XMunim is a tool for record-keeping. While we provide secure storage, users are responsible for verifying transaction amounts and settlements with shop owners.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">03</div>
                            <h2 className="policy-title">Prohibited Use</h2>
                        </div>
                        <div className="policy-body">
                            <p>Users may not use the platform for fraudulent activities, money laundering, or any illegal financial transactions.</p>
                        </div>
                    </div>

                    <div className="policy-section glass-panel">
                        <div className="policy-header">
                            <div className="number-badge">04</div>
                            <h2 className="policy-title">Disclaimer</h2>
                        </div>
                        <div className="policy-body">
                            <p>XMunim provides the service 'as is' and is not liable for disputes between customers and shop owners regarding ledger balances.</p>
                        </div>
                    </div>
                </div>

                <div className="legal-footer">
                    <p>Questions regarding our terms of service? <br /> Reach out to our compliance team at support@xmunim.com</p>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
