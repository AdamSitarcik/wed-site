import Wrapper from "../assets/wrappers/BigNavbar.js";
import { Link } from "react-scroll";
import Logo from "./Logo.js";
import { useAppContext } from "../context/appContext.js";
import NavLinks from "./NavLinks.js";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [showLogo, setShowLogo] = useState(false);
    useEffect(() => {
        setShowLogo(window.scrollY > 100);
    }, []);

    return (
        <Wrapper>
            <div className="navbar-container">
                <div className="content">
                    {showLogo && <Logo />}
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
