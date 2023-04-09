import { Link } from 'react-scroll';
import Wrapper from '../assets/wrappers/ScrollButton';

const ScrollButton = ({whereTo}) => {
    return (
        <Wrapper>
            <Link to={whereTo} smooth={true}>
                <div className="scroll-container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </Link>
        </Wrapper>
    );
};

export default ScrollButton;
