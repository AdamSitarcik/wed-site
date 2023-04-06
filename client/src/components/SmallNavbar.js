import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SmallNavbar.js";
import Logo from "./Logo.js";
import NavLinks from "./NavLinks";
import { HiMenu } from "react-icons/hi";

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
                        ? "navbar-container show-navbar"
                        : "navbar-container"
                }
            >
                <div className="navbar-content">
                    <Logo handleClick={toggleNavbar} />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
