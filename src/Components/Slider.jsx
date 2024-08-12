import React, { useEffect } from 'react';
import '../Assects/Css/Slider.css';

import img1 from '../Assects/Images/image.png';
import img2 from '../Assects/Images/img1.png';
import img3 from '../Assects/Images/image1.png';
import userpic2 from '../Assects/Images/userpic1.png';
import userpic1 from '../Assects/Images/userpic4.png';

function Slider() {
    useEffect(() => {
        // Function to slide to the next item
        const slideNext = () => {
            const carouselElement = document.querySelector('#carouselExampleCaptions');
            if (carouselElement) {
                const nextButton = carouselElement.querySelector('.carousel-control-next');
                if (nextButton) {
                    nextButton.click();
                }
            }
        };

        // Set interval to slide every 0.5 seconds
        const intervalId = setInterval(slideNext, 6000);

        // Clean up interval on component unmount
        return () => {
            clearInterval(intervalId);
        }; 
    }, []);          

    return (
        <>
            {/* Slider Section block*/}
            <div className='second-section'>

                <div className='slider-section'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slider-content">
                                    <div className="left-content">
                                        <p className='slider1-left-review'>
                                            I'm not a designer, when I had to make a logo I found myself staring at a blank screen.<br /> Brandmark made the process actually enjoyable.
                                        </p>
                                        <div className='slider1-user'>
                                            <span><img src={userpic1} alt="" width='80%' /></span>
                                            <div className='slider1-user-note'>
                                                <h6>Srinivas Mandla</h6>
                                                <p>CEO pubLaw Project</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-image">
                                        <div className='right-image-slider'><img src={img3} alt="Slide 1" width='100%' height='100%'/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="slider-content">
                                    <div className="left-content">
                                        <p className='slider1-left-review'>
                                            I'm not a designer, when I had to make a logo I found myself staring at a blank screen.<br /> Brandmark made the process actually enjoyable.
                                        </p>
                                        <div className='slider1-user'>
                                            <span><img src={userpic2} alt="" width='80%' /></span>
                                            <div className='slider1-user-note'>
                                                <h6>Mounika M</h6>
                                                <p>CEO Pankag Project</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-image">
                                        <div className='right-image-slider'><img src={img2} alt="Slide 1" width='100%' height='100%' /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="slider-content">
                                    <div className="left-content">
                                        <p className='slider1-left-review'>
                                            I'm not a designer, when I had to make a logo I found myself staring at a blank screen.<br /> Brandmark made the process actually enjoyable.
                                        </p>
                                        <div className='slider1-user'>
                                            <span><img src={userpic1} alt="" width='80%' /></span>
                                            <div className='slider1-user-note'>
                                                <h6>Pavan Kumar</h6>
                                                <p>Personal Project</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-image">
                                        <div className='right-image-slider'><img src={img1} alt="Slide 1" width='100%' height='100%' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='slider-fotter pb-5'></div>
            {/* Slider Section block /end*/}
        </>
    );
}

export default Slider;
