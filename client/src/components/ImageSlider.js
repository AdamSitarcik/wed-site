import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Wrapper from '../assets/wrappers/ImageSlider';

const ImageSlider = () => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = useMemo(() => {
        return [
            { url: '/slider-images/img-1.jpg' },
            { url: '/slider-images/img-2.jpg' },
            { url: '/slider-images/img-3.jpg' },
            { url: '/slider-images/img-4.jpg' },
            { url: '/slider-images/img-5.jpg' },
        ];
    }, []);

    const gotoPrev = useCallback(() => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const gotoNext = useCallback(() => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            gotoNext();
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [gotoNext]);

    return (
        <Wrapper>
            <div className="slider-container">
                <div className="slide-container">
                    <div className="prev-arrow-container" onClick={gotoPrev}>
                        <div className="prev-arrow">⟨</div>
                    </div>
                    <div
                        className="slide"
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                    ></div>
                    <div className="next-arrow-container" onClick={gotoNext}>
                        <div className="next-arrow">⟩</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ImageSlider;
