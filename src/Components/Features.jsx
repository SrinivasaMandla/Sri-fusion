import React from 'react';
import { Link } from 'react-router-dom';
import '../Assects/Css/Features.css';


function Features() {
    return (
        <>
            {/* Features block /start */}
            <div className='features'>
                <div className='features-box'>
                    <div className='features-list'>
                        <div className='features-list-one' style={{ color: '#ee5495' }}>
                            <div className='features-item-cover list-1'>
                                <i class="fa-regular fa-circle-xmark"></i>
                            </div>
                            <div className='features-item-box'>
                                <h4 className='features-item-box-title'>No more designer anxiety</h4>
                                <p className='features-item-box-note'>Get your logo instantly, not in weeks.</p>
                            </div>
                        </div>
                        <div className='features-list-one left-margin'>
                            <div className='features-item-cover list-2'>
                                <i class="fa-solid fa-circle-radiation"></i>
                            </div>
                            <div className='features-item-box' style={{ color: '#79b790' }}>
                                <h4 className='features-item-box-title'>Need a tweak to your design?</h4>
                                <p className='features-item-box-note'>We’ll do it for you, absolutely free</p>
                            </div>
                        </div>
                        <div className='features-list-one'>
                            <div className='features-item-cover list-3'>
                                <i class="fa-regular fa-circle-up"></i>
                            </div>
                            <div className='features-item-box' style={{ color: '#9baed9' }}>
                                <h4 className='features-item-box-title'>No monthly charges</h4>
                                <p className='features-item-box-note'>Pay once, get access to our branding tools forever.</p>
                            </div>
                        </div>
                        <div className='features-list-one left-margin'>
                            <div className='features-item-cover list-4'>
                                <i class="fa-regular fa-circle-user"></i>
                            </div>
                            <div className='features-item-box' style={{ color: '#e3a624' }}>
                                <h4 className='features-item-box-title'>Full copyright included</h4>
                                <p className='features-item-box-note'>For use in commercial and personal projects</p>
                            </div>
                        </div>
                        <div className='features-list-one'>
                            <div className='features-item-cover list-5'>
                                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            </div>
                            <div className='features-item-box'>
                                <h4 className='features-item-box-title'>Unlimited revisions</h4>
                                <p className='features-item-box-note'>Modify your logo at any time, even after purchase</p>
                            </div>
                        </div>
                    </div>
                    <div className='features-action'>
                        <h3 className='features-action-title'>Create your unique logo design</h3>
                        <p className='features-action-note'>generate unlimited logos for free</p>
                        <Link to='/'>
                            <button className='features-action-btn '>Create my logo</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Features block /End */}
        </>
    )
}
export default Features;