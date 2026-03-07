import React, { useRef, useState, useEffect } from 'react';
import './Showcase.css';

// Import images from assets (assuming Webpack/Vite handles this)
// Alternatively, if they are copied to public/, use standard paths.
// Since we copied them to src/assets/screenshots, we'll import them.
import loginImg from '../assets/screenshots/login.png';
import shopownerImg from '../assets/screenshots/shopowner.png';
import customerImg from '../assets/screenshots/customer.png';
import detailImg from '../assets/screenshots/detail.png';
import qrShareImg from '../assets/screenshots/qr_share.png';
import adminImg from '../assets/screenshots/admin.png';

const showcaseItems = [
    {
        id: 'login',
        title: 'Authentication',
        desc: 'Secure OTP Login',
        image: loginImg,
        color: '#4F46E5', // indigo-600
    },
    {
        id: 'shopowner',
        title: 'Shop Owner',
        desc: 'Complete Dashboard',
        image: shopownerImg,
        color: '#8B5CF6', // violet-500
    },
    {
        id: 'customer',
        title: 'Customer',
        desc: 'Digital Ledger',
        image: customerImg,
        color: '#06B6D4', // cyan-500
    },
    {
        id: 'detail',
        title: 'Transactions',
        desc: 'Customer History',
        image: detailImg,
        color: '#10B981', // emerald-500
    },
    {
        id: 'qr',
        title: 'Connect',
        desc: 'QR Code Sharing',
        image: qrShareImg,
        color: '#F59E0B', // amber-500
    },
    {
        id: 'admin',
        title: 'Admin',
        desc: 'Platform Management',
        image: adminImg,
        color: '#EF4444', // red-500
    }
];

const PhoneFrame = ({ item, isActive }) => {
    return (
        <div className={`phone-wrapper ${isActive ? 'active' : ''}`}>
            <div className="phone-device">
                {/* Android Notch / Top Speaker */}
                <div className="phone-notch">
                    <div className="camera-lens"></div>
                    <div className="speaker-grill"></div>
                </div>

                {/* Status Bar simulation */}
                <div className="status-bar">
                    <span className="time">12:00</span>
                    <div className="icons">
                        <span className="icon-signal">•••</span>
                        <span className="icon-wifi">WiFi</span>
                        <span className="icon-battery">■</span>
                    </div>
                </div>

                {/* Screen Content */}
                <div className="phone-screen">
                    <img src={item.image} alt={item.title} className="screen-image" />
                </div>

                {/* Android Bottom Navigation Area (optional, since screenshot might have it) */}
                {/* <div className="bottom-nav-bar"></div> */}

                {/* Physical Buttons */}
                <div className="volume-buttons"></div>
                <div className="power-button"></div>
            </div>

            {/* Label below phone */}
            <div className="phone-label">
                <span className="label-dot" style={{ backgroundColor: item.color }}></span>
                <div className="label-text">
                    <h4 className="label-title">{item.title}</h4>
                    <p className="label-desc">{item.desc}</p>
                </div>
            </div>
        </div>
    );
};

const Showcase = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1); // Default to second item (Dashboard)

    const handleScroll = () => {
        if (!scrollRef.current) return;
        
        const container = scrollRef.current;
        const scrollPosition = container.scrollLeft;
        const centerPosition = scrollPosition + container.clientWidth / 2;
        
        // Assume all items have roughly the same width. 
        // 320px width + 40px gap = 360px per item
        const itemWidth = 360; 
        
        // Find closest index
        const index = Math.max(0, Math.min(
            showcaseItems.length - 1, 
            Math.floor((centerPosition - container.clientWidth / 2 + itemWidth / 2) / itemWidth)
        ));
        
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <section className="section showcase-section" id="showcase">
            <div className="container">
                <div className="showcase-header text-center">
                    <h2 className="section-title">Experience the App</h2>
                    <p className="section-subtitle">
                        A seamless, premium interface across all user roles. Swipe to explore the digital ledger redefined.
                    </p>
                </div>
            </div>

            <div className="showcase-container">
                {/* Decorative background blur */}
                <div 
                    className="showcase-glow" 
                    style={{ backgroundColor: showcaseItems[activeIndex].color }}
                ></div>

                <div 
                    className="showcase-scroll-area" 
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    <div className="showcase-padder left"></div>
                    {showcaseItems.map((item, index) => (
                        <PhoneFrame 
                            key={item.id} 
                            item={item} 
                            isActive={index === activeIndex} 
                        />
                    ))}
                    <div className="showcase-padder right"></div>
                </div>
                
                {/* Scroll Indicators */}
                <div className="scroll-indicators">
                    {showcaseItems.map((_, idx) => (
                        <span 
                            key={idx} 
                            className={`indicator-dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left: idx * 360, // approximate item width + gap
                                        behavior: 'smooth'
                                    });
                                    setActiveIndex(idx);
                                }
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
