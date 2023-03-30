import Wrapper from '../assets/wrappers/SmallNavbar.js';
import { Link } from 'react-scroll';
import Logo from './Logo.js';

const Navbar = () => {
    const links = [
        { id: 1, text: 'O nás', navigate: '#about-us' },
        { id: 2, text: 'Harmonogram', navigate: '#timeline' },
        { id: 3, text: 'Informácie', navigate: '#info' },
        { id: 4, text: 'Registrácia', navigate: '#register' },
        { id: 5, text: 'Kontakt', navigate: '#contact' },
    ];

    return (
        <Wrapper>
            <Logo href="/" />
            {links.map((link) => {
                const { id, text, navigate } = link;
                return (
                    <Link
                        to={navigate}
                        key={id}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                    >
                        {text}
                    </Link>
                );
            })}
        </Wrapper>
    );
};

export default Navbar;
