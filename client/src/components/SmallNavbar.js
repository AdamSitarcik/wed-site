import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SmallNavbar.js';
import Logo from './Logo.js';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
    const { toggleNavbar, showSmallNavbar } = useAppContext();

    const skuska = () => {
        console.log('click');
    }

    return (
        <Wrapper>
            <div
                className={
                    showSmallNavbar
                        ? 'navbar-container show-navbar'
                        : 'navbar-container'
                }
            >
                <div className="navbar-content">
                    <Logo />
                    <button
                        type="button"
                        className="close-btn"
                        onClick={skuska}
                    >
                        <FaTimes />
                    </button>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
