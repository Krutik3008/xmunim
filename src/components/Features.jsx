import React from 'react';
import './Features.css';
import { ReceiptText, Share2, FileSpreadsheet } from 'lucide-react';

const featuresData = [
    {
        icon: ReceiptText,
        title: 'Digital Ledger',
        description: 'Track complete transaction histories, view total credits, and manage pending balances effortlessly for every customer.'
    },
    {
        icon: Share2,
        title: 'Quick Sharing',
        description: 'Instantly generate Shop QR codes, share UPI payment links, and send payment requests directly via WhatsApp.'
    },
    {
        icon: FileSpreadsheet,
        title: 'Reports & Exports',
        description: 'Easily generate and download detailed transaction reports in both professional PDF and Excel (.xlsx) formats.'
    }
];

const Features = () => {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="features-header text-center">
                    <h2 className="section-title">Everything a Shop Needs.<br />Right in your pocket.</h2>
                    <p className="section-subtitle">A digital ledger experience crafted for modern shop owners and loyal customers.</p>
                </div>

                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div className="feature-card glass-panel" key={index}>
                            <div className="feature-icon">
                                <feature.icon size={36} color="#3B82F6" strokeWidth={1.5} />
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
