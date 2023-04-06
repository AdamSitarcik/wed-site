import Wrapper from "../assets/wrappers/Logo.js";

const Logo = ({ handleClick }) => {
    return (
        <Wrapper>
            <div className="logo-container">
                <a href="/" className="app-logo">
                    <img
                        src="../logo_black.svg"
                        alt="logo"
                        onClick={handleClick}
                    />
                </a>
            </div>
        </Wrapper>
    );
};

export default Logo;
