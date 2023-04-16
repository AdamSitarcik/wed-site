import { Wrapper } from '../assets/wrappers/BigNavbar.js';
import { Link } from 'react-scroll';
import Logo from './Logo.js';
import { useAppContext } from '../context/appContext.js';
import { NavLinks } from './';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [showLogo, setShowLogo] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShowLogo(window.scrollY > 150);
        });
    }, []);

    return (
        <Wrapper>
            <Logo showLogo={showLogo} />
            <div className="navbar-container">
                <div className="content">
                    <NavLinks showNavlinks={!showLogo} />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
