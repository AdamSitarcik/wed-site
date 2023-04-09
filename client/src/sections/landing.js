import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { ScrollButton, BigNavbar, SmallNavbar } from '../components';
import { useAppContext } from '../context/appContext';

const Landing = ({ className }) => {
    const { sections } = useAppContext();

    return (
        <section id="/" className={className}>
            <header className="App-header">
                <BigNavbar />
                <SmallNavbar />
            </header>
            <div className="info-container">
                <h2>27.5.2023 o 14:30</h2>
                <div className="name-container">
                    <h1>Diana</h1>
                    <AiFillHeart className="react-icon heart-icon" />
                    <h1>Adam</h1>
                </div>
                <h2>
                    Veľký evanjelický kostol v Bratislave{' '}
                    <a
                        href="https://goo.gl/maps/kBfbPf4MD7F6x2aM8"
                        className="react-icon"
                    >
                        <FaMapMarkerAlt />
                    </a>
                </h2>
            </div>
            <ScrollButton whereTo={sections[0].navigate} />
        </section>
    );
};

export default Landing;
