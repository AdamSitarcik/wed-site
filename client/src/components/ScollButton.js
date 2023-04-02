import { Link } from 'react-scroll';

const ScrollButton = () => {
    return (
        <Link to="about-us" smooth={true}>
            <div className="scroll-container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </Link>
    );
};

export default ScrollButton;
