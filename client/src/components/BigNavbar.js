import Wrapper from '../assets/wrappers/BigNavbar.js';
import { Link } from 'react-scroll';
import Logo from './Logo.js';
import { useAppContext } from '../context/appContext.js';
import NavLinks from './NavLinks.js';

const Navbar = () => {

    return (
        <Wrapper>
            <div className="navbar-container">
                <div className="content">
                    {/* <Logo /> */}
                    <NavLinks />
                </div>
            </div>

        </Wrapper>
    );
};

export default Navbar;
