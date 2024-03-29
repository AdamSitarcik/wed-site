import { AiFillHeart } from 'react-icons/ai';
import { ScrollButton, BigNavbar, SmallNavbar, Countdown } from '../components';
import { useAppContext } from '../context/appContext';
import { Wrapper } from '../assets/wrappers/LandingSection';
import { MapSymbol } from '../components';
import { useState, useEffect } from 'react';

const Landing = ({ className }) => {
    const { sections } = useAppContext();
    const [showFrame, setShowFrame] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShowFrame(!window.scrollY > 0);
        });
    }, []);

    return (
        <Wrapper>
            <section id="/" className={className}>
                <header className="App-header">
                    <BigNavbar />
                    <SmallNavbar />
                </header>
                <div
                    className={
                        showFrame
                            ? 'show-frame info-container'
                            : 'info-container'
                    }
                >
                    <h2>27.5.2023 o 14:30</h2>
                    <div className="name-container">
                        <h1>Diana</h1>
                        <AiFillHeart className="react-icon heart-icon" />
                        <h1>Adam</h1>
                    </div>
                    <h3>
                        <span>Veľký evanjelický kostol</span>
                        <span>
                            v Bratislave{' '}
                            <MapSymbol href="https://goo.gl/maps/kBfbPf4MD7F6x2aM8" />
                        </span>
                    </h3>
                </div>
                <Countdown />
                <ScrollButton whereTo={sections[0].navigate} />
            </section>
        </Wrapper>
    );
};

export default Landing;
