import React, { useState } from 'react';
import bca from './Images/bca.jpg';
import mca from './Images/mca.jpg';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [bca,mca]; 

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slider">
            <button className="prev" onClick={prevSlide}>
                &lt;
            </button>
            <div
                className="slider-image"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    height: "1500px",
                    width: "100%",
                    backgroundPosition: "center",
                }}
            />
            <button className="next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slider;
