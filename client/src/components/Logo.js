import { Link } from 'react-scroll';
import { Wrapper } from '../assets/wrappers/Logo.js';

const Logo = ({ handleClick, showLogo }) => {
    return (
        <Wrapper>
            <div
                className={
                    showLogo ? 'show-logo logo-container' : 'logo-container'
                }
            >
                <Link
                    to="/"
                    className="app-logo"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    onClick={handleClick}
                >
                    <img src="../logo_black_v2.svg" alt="logo" />
                    {/* D&A */}
                </Link>
            </div>
        </Wrapper>
    );
};

export default Logo;
