import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Landing = ({ className }) => {
    return (
        <section id="landing" className={className}>
            <div className="info-container">
                <h2>27.5.2023 o 14:30</h2>
                <h1>Diana & Adam</h1>
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
            <Link to="about-us" smooth={true}>
                <div className="scroll-container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </Link>
        </section>
    );
};

export default Landing;
