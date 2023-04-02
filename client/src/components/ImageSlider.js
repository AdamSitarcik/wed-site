import { useState } from 'react';
import Wrapper from '../assets/wrappers/ImageSlider';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: '/slider-images/img-1.jpg' },
        { url: '/slider-images/img-2.jpg' },
        { url: '/slider-images/img-3.jpg' },
        { url: '/slider-images/img-4.jpg' },
        { url: '/slider-images/img-5.jpg' },
    ];

    const slide = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const gotoPrev = () => {
        console.log(currentIndex);
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const gotoNext = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <Wrapper>
            <div className="slider-container">
                <div className="slide-container">
                    <div className="prev-arrow-container" onClick={gotoPrev}>
                        <div className="prev-arrow">⟨</div>
                    </div>
                    <div className="slide" style={slide}></div>
                    <div className="next-arrow-container" onClick={gotoNext}>
                        <div className="next-arrow">⟩</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ImageSlider;
