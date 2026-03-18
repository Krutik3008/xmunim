import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/' || ['/features', '/security', '/showcase'].includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        navigate('/' + id);
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <Wallet className="logo-icon" size={24} color="#3B82F6" strokeWidth={2.5} />
                    <span className="logo-text">XMunim</span>
                </Link>
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {isHome ? (
                        <>
                            <a href="#features" className="nav-link" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
                            <a href="#security" className="nav-link" onClick={(e) => scrollToSection(e, 'security')}>Security</a>
                            <a href="#showcase" className="nav-link" onClick={(e) => scrollToSection(e, 'showcase')}>App Showcase</a>
                        </>
                    ) : (
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    )}
                </div>

                <button className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} color="#ffffff" className="nav-icon" /> : <Menu size={28} color="#ffffff" className="nav-icon" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
