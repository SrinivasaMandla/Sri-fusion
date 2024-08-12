import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Assects/Css/Header.css'; // Ensure the path is correct

function Header() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showSubNavBar, setShowSubNavBar] = useState(true); // Show submenu by default
    const sidebarRef = useRef(null); // Reference to the sidebar

    const toggleNavBar = () => {
        setShowNavBar(!showNavBar);
        if (!showNavBar) {
            // Reset submenu state when opening the sidebar
            setShowSubNavBar(true);
        }
    };

    const handleMenuClick = () => {
        setShowSubNavBar(!showSubNavBar);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setShowNavBar(false);
        }
    };

    useEffect(() => {
        if (showNavBar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNavBar]);

    return (
        <>
            <div className='hero-section'>
                {/* Navbar block start */}
                <aside className={`sidebar ${showNavBar ? 'show' : ''}`} ref={sidebarRef}>
                    <div className='sidebar-logo'>
                        <span className='sidebar-brand'>SRIFUSION</span>
                        <button className='toggle-btn-close' onClick={toggleNavBar}>✖</button>
                    </div>
                    <nav className='sidebar-nav'>
                        <ul className="menu">
                            <li className={`menu-item ${showSubNavBar ? 'opened' : ''}`}>
                                <Link to="/" className='main-menu-box' onClick={handleMenuClick}>
                                    <span className="ps-1 menu-title">Menu <span className='pe-5 styled-downarrow'> &#8964;</span></span>
                                    <span className='menu-end-icons mb-2'><i className="fa-solid fa-ellipsis"></i></span>
                                </Link>
                                {/* submenu */}
                                <ul className={`sub-menu ${showSubNavBar ? 'show' : 'hide'}`}>
                                    <li className="menu-item">
                                        <Link to="/" className="menu-link">
                                            <span className="menu-name">Tools</span>
                                            <span className='menu-end-icons'><i className="fa-solid fa-box"></i></span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/" className="menu-link">
                                            <span className="menu-name">Pricing</span>
                                            <span className='menu-end-icons'><i className="fa-solid fa-dollar-sign"></i></span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='' className="menu-link">
                                            <span className="menu-name">Support</span>
                                            <span className='menu-end-icons'><i className="fa-regular fa-envelope"></i></span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='' className="menu-link">
                                            <span className="menu-name">Login</span>
                                            <span className='menu-end-icons'><i className="fa-solid fa-right-from-bracket"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
                {/* /End Navbar block */}

                {/* Hero section start */}
                <section className='hero'>
                    <button className='toggle-btn' onClick={toggleNavBar}>☰</button>
                    <div className='hero-box'>
                        <div className='hero-logo'>
                            <span className='first-name'>Sri</span>
                            <span className='last-name'>Fusion</span>
                        </div>
                        <h2 className='hero-title'>Create a unique, professional<br />logo for your business</h2>
                        <p className='hero-note'>Kickstart your brand with business card designs, social<br /> media graphics, app icons, letter heads and more </p>
                        <button className='hero-button '>Create my logo</button>
                    </div>
                </section>
                {/* /End Hero section */}
            </div>
        </>
    );
}

export default Header;
