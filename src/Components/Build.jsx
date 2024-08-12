import React from 'react';
import { Link } from 'react-router-dom';
import '../Assects/Css/Build.css';
import asteroid from '../Assects/Images/asteroid.png'

function Build() {
    return (
        <>
            <section className='build'>
                <div className='build-box'>
                    <div className='build-row'>
                        <div className='build-left'>
                            <div className='build-left-img'>
                            </div>
                            <div className='build-left-button'>
                                <div className='build-left-svg'>
                                    <img src={asteroid} alt="" />
                                </div>
                                <Link to='/'>
                                    <button className='build-left-btn'><i class="fa-solid fa-right-from-bracket fa-rotate-by fa-sm" style={{ '--fa-rotate-angle': "-30deg" }}></i>See example assets</button>
                                </Link>
                            </div>
                        </div>

                        <div className='build-right'>
                            <div className='build-right-box'>
                                <h3 className='build-right-top-title'>Build a beautiful brand<br /> on time and on budget</h3>
                                <p className='build-right-top-note'>Kickstart your business with thousands of <span style={{ fontWeight: '600' }}>ready-to-use</span> design assets.</p>
                                <div className='build-right-notes'>
                                    <div className='right-note'>
                                        <i class="fa-regular fa-file right-con"></i>
                                        <span>Logo design files</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-regular fa-circle-user right-con"></i>
                                        <span>Social profile icons</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-regular fa-credit-card right-con"></i>
                                        <span>Business card designs</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-regular fa-file right-con"></i>
                                        <span>Animated designs</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-solid fa-scroll right-con"></i>
                                        <span>Letterhead templates</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-solid fa-box right-con"></i>
                                        <span>Social media designs</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-solid fa-display right-con"></i>
                                        <span>Presentation templates</span>
                                    </div>
                                    <div className='right-note'>
                                        <i class="fa-solid fa-book-open right-con"></i>
                                        <span>Brand guide</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Build;