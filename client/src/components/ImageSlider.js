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
            // { url: '/slider-images/img9.jpg' },
            // { url: '/slider-images/img10.jpg' },
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

    // <symbol id="icon-frame_1" viewBox="0 0 370 32">
    //     <path
    //         fill="#dadabf"
    //         style={{ fill: 'var(--color1, #dadabf)' }}
    //         opacity="0.596078"
    //         d="M0.399 16v-16l1.696 0.989c3.873 2.259 14.431 7.775 19.454 10.164 24.451 11.627 42.625 15.925 61.255 14.485 10.183-0.787 15.365-1.691 38.709-6.751 41.935-9.090 64.651-12.206 105.75-14.506 12.262-0.686 65.624-0.685 80.21 0.002 22.651 1.067 56.608 3.247 60.956 3.914l1.496 0.23v23.474h-369.527z"
    //     ></path>
    //     <path
    //         fill="#dadabf"
    //         style={{ fill: 'var(--color1, #dadabf)' }}
    //         opacity="0.596078"
    //         d="M0 20.271v-11.729l4.489 1.147c38.659 9.88 77.587 14.402 113.091 13.137 25.678-0.915 41.776-2.795 85.539-9.988 51.675-8.493 69.525-10.359 99.166-10.363 18.421-0.003 30.652 0.757 48.451 3.008 7.507 0.95 17.066 2.409 18.491 2.823 0.645 0.187 0.698 1.105 0.698 11.948v11.745h-369.926z"
    //     ></path>
    // </symbol>;

    return (
        <div className="slider-container">
            <div className="slide-container">
                <div className="prev-arrow-container" onClick={gotoPrev}>
                    <div className="prev-arrow">⟨</div>
                </div>
                <div className="next-arrow-container" onClick={gotoNext}>
                    <div className="next-arrow">⟩</div>
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
            </div>
        </div>
    );
};

export default ImageSlider;
