import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';

const ImageSlider = () => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showSlide, setShowSlide] = useState(true);
    const [showSecondarySlide, setShowSecondarySlide] = useState(true);
    const [nextSlide, setNextSlide] = useState(true);

    const slides = useMemo(() => {
        return [
            { url: '/slider-images/img1.jpg' },
            { url: '/slider-images/img2.jpg' },
            { url: '/slider-images/img3.jpg' },
            { url: '/slider-images/img4.jpg' },
            { url: '/slider-images/img5.jpg' },
            { url: '/slider-images/img6.jpg' },
            { url: '/slider-images/img7.jpg' },
            { url: '/slider-images/img8.jpg' },
            { url: '/slider-images/img9.jpg' },
            { url: '/slider-images/img10.jpg' },
            { url: '/slider-images/img11.jpg' },
        ];
    }, []);

    const prevSlideIndex = useCallback(() => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        return newIndex;
    }, [currentIndex, slides]);

    const nextSlideIndex = useCallback(() => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        return newIndex;
    }, [currentIndex, slides]);

    const gotoPrev = useCallback(() => {
        setNextSlide(false);
        setShowSlide(false);
        setShowSecondarySlide(true);

        setTimeout(() => {
            setCurrentIndex(prevSlideIndex());
            setTimeout(() => {
                setShowSecondarySlide(false);
            }, 100);
        }, 1000);
    }, [prevSlideIndex]);

    const gotoNext = useCallback(() => {
        setNextSlide(true);
        setShowSlide(false);
        setShowSecondarySlide(true);

        setTimeout(() => {
            setCurrentIndex(nextSlideIndex());
            setTimeout(() => {
                setShowSecondarySlide(false);
            }, 100);
        }, 1000);
    }, [nextSlideIndex]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            gotoNext();
        }, 5000);

        return () => clearTimeout(timerRef.current);
    }, [gotoNext]);

    return (
        <div className="slider-container">
            <div className="slide-container">
                <div className="prev-arrow-container" onClick={gotoPrev}>
                    <div className="prev-arrow">⟨</div>
                </div>
                <CSSTransition
                    in={showSlide}
                    timeout={1000}
                    classNames="slide"
                    unmountOnExit
                    onExit={() => {
                        setShowSecondarySlide(true);
                    }}
                    onExited={() => {
                        setShowSecondarySlide(false);
                        setShowSlide(true);
                    }}
                >
                    <div
                        className="slide"
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                    ></div>
                </CSSTransition>

                {showSecondarySlide && (
                    <div
                        className="slide secondary"
                        style={{
                            backgroundImage: `url(${
                                slides[
                                    nextSlide
                                        ? nextSlideIndex()
                                        : prevSlideIndex()
                                ].url
                            })`,
                        }}
                    ></div>
                )}
                <div className="next-arrow-container" onClick={gotoNext}>
                    <div className="next-arrow">⟩</div>
                </div>
                <div className="frame">
                    <img src="frame_1.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
