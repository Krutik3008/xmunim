import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <Wallet className="logo-icon" size={24} color="#3B82F6" strokeWidth={2.5} />
                    <span className="logo-text">ShopMunim</span>
                </Link>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {isHome ? (
                        <>
                            <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
                            <a href="#security" className="nav-link" onClick={() => setIsOpen(false)}>Security</a>
                            <a href="#showcase" className="nav-link" onClick={() => setIsOpen(false)}>App Showcase</a>
                        </>
                    ) : (
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    )}
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} color="#ffffff" /> : <Menu size={28} color="#ffffff" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
