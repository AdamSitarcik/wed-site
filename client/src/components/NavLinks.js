import { useAppContext } from '../context/appContext';
import { Link } from 'react-scroll';

const NavLinks = () => {
    const { sections, toggleNavbar } = useAppContext();

    return (
        <div className='nav-links'>
            {sections.map((section) => {
                const { id, text, navigate } = section;
                return (
                    <Link
                        to={navigate}
                        key={id}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        // onClick={toggleNavbar}
                    >
                        {text}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLinks;
