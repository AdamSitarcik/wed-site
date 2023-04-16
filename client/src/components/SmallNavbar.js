import { useAppContext } from '../context/appContext';
import { Wrapper } from '../assets/wrappers/SmallNavbar.js';
import { NavLinks, Logo } from './';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const { toggleNavbar, showSmallNavbar } = useAppContext();

    return (
        <Wrapper>
            <button type="button" className="toggle-btn" onClick={toggleNavbar}>
                <HiMenu />
            </button>
            <div
                className={
                    showSmallNavbar
                        ? 'navbar-container show-navbar'
                        : 'navbar-container'
                }
                onClick={toggleNavbar}
            >
                <div
                    className="navbar-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Logo handleClick={toggleNavbar} />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
