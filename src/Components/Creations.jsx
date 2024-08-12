import React from 'react';
import '../Assects/Css/Creations.css';
import i1 from '../Assects/Images/Creation/i1.jpg';
import i2 from '../Assects/Images/Creation/i2.jpg';
import i3 from '../Assects/Images/Creation/i3.jpg';
import i4 from '../Assects/Images/Creation/i4.jpg';
import i5 from '../Assects/Images/Creation/i5.jpg';
import i6 from '../Assects/Images/Creation/i6.jpg';
import i7 from '../Assects/Images/Creation/i7.jpg';
import i8 from '../Assects/Images/Creation/i8.jpg';
import i9 from '../Assects/Images/Creation/i9.jpg';
import i10 from '../Assects/Images/Creation/i10.jpg';
import i11 from '../Assects/Images/Creation/i11.jpg';
import i12 from '../Assects/Images/Creation/i12.jpg';
import i13 from '../Assects/Images/Creation/i13.jpg';

function Creations() {
    return (
        <>
            {/* creations section block  */}
            <section className='creations'>
                <div className='creations-box'>
                    <div className='creations-list'>
                        <div className='creations-list-one'>
                            <h3 className='list-one-head'>Latest customer <br /> creations</h3>
                            <p className='list-one-note'>See why over 108,704 users have created a logo with Brandmark.io</p>
                        </div>
                        <div className='creations-list-two'>
                            <img src={i1} alt="i1 image" />
                        </div>
                        <div className='creations-list-three'>
                            <img src={i2} alt="i2 image" />
                        </div>
                        <div className='creations-list-four'>
                            <img src={i3} alt="i3 image" />
                        </div>
                        <div className='creations-list-five'>
                            <img src={i4} alt="i4 image" />
                        </div>
                        <div className='creations-list-six'>
                            <img src={i5} alt="i5 image" />
                        </div>
                        <div className='creations-list-seven'>
                            <img src={i6} alt="i6 image" />
                        </div>
                        <div className='creations-list-eight'>
                            <img src={i7} alt="i7 image" />
                        </div>
                        <div className='creations-list-nine'>
                            <img src={i8} alt="i5 image" />
                        </div>
                        <div className='creations-list-ten'>
                            <img src={i9} alt="i5 image" />
                        </div>
                        <div className='creations-list-eleven'>
                            <img src={i10} alt="i5 image" />
                        </div>
                        <div className='creations-list-twelve'>
                            <img src={i11} alt="i5 image" />
                        </div>
                        <div className='creations-list-thirten'>
                            <img src={i12} alt="i5 image" />
                        </div>
                        <div className='creations-list-fourteen'>
                            <img src={i13} alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* /End creations section block  */}
        </>
    )
}
export default Creations;