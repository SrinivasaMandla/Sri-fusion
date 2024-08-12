import React from 'react';
import '../Assects/Css/Instantly.css';
import settings from '../Assects/Images/settings.gif';

function Instantly() {
    return (
        <>
            {/* Instantly block /start */}
            <div className='instantly'>
                <div className='instantly-box'>
                    <div className='instantly-head'>
                        <h3 className='instantly-head-title text-white'>Instantly customize and export</h3>
                        <p className='instantly-head text-white'>Right in your browser, no designer or software needed</p>
                    </div>
                    <div className='instantly-preview'>
                        <div className='instantly-preview-box'>
                            <img src={settings} alt="settings img" width='100%' height='100%'/>
                        </div>
                        <div className='instantly-preview-note'>
                            <div className='preview-note-1'>
                                <h6 className='preview-title'>Export to all major formats</h6>
                                <p className='preview-note'>Including SVG, EPS, PNG and PDF</p>
                            </div>
                            <div className='preview-note-2'>
                                <h6 className='preview-title'>Adjust text and image size</h6>
                                <p className='preview-note'>Perfecly sized for web and print</p>
                            </div>
                            <div className='preview-note-3'>
                                <h6 className='preview-title'>Easily edit and customize</h6>
                                <p className='preview-note'>Double click to edit text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instantly block /End */}
        </>
    )
}
export default Instantly;