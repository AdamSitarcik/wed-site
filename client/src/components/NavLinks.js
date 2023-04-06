import { useAppContext } from '../context/appContext';
import { Link } from 'react-scroll';

const NavLinks = ({showNavlinks}) => {
    const { sections, toggleNavbar } = useAppContext();

    return (
        <div className={showNavlinks ? 'show-navlinks nav-links' : 'nav-links'}>
            {sections.map((section) => {
                const { id, text, navigate } = section;
                return (
                    <Link
                        to={navigate}
                        key={id}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={toggleNavbar}
                    >
                        {text}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLinks;
