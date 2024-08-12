import React from 'react';
import { Link } from 'react-router-dom';
import '../Assects/Css/Footer.css';

function Footer() {
    return (
        <>
        {/* Footer Block section start */}
            <div className='footer-main'>
                <div className='footer-box'>
                    {/* Footer first section  */}
                    <div className='footer-row'>
                        <div className='footer-section'>
                            <div className='mb-2 '>
                                <Link to="/about" className='title title-one' style={{ color: '#f6ce55' }}>Create your logo</Link>
                            </div>
                            <p className='footer-note'>Try Brandmark for free, no account needed</p>
                        </div>
                        <div className='footer-section'>
                            <div className='mb-2'>
                                <Link to="/about" className='title title-two' style={{ color: '#ee5495' }}>Support</Link>
                            </div>
                            <p className='footer-note'>Have questions or need help? Start here.</p>
                        </div>
                        <div className='footer-section'>
                            <div className='mb-2'>
                                <Link to="/about" className='title title-three' style={{ color: '#8ecea8' }}>Tools</Link>
                            </div>
                            <p className='footer-note'>Check out our free tools for color, font and logo design</p>
                        </div>
                        <div className='footer-section pb-2'>
                            <Link to="/about" className='title-last'>Terms of service</Link>
                        </div>
                        <div className='footer-section pb-2' >
                            <Link to="/about" className='title-last'>Privacy policy</Link>
                        </div>
                    </div>

                    {/* Footer decor section  */}
                    <div className='footer-decor'>
                        <div className='footer-decor-section'>
                            <div className='first-decor'></div>
                            <div className='second-decor'></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Block section /End */}
        </>
    )
}
export default Footer;