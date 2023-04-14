import ContactInfo from '../components/ContactInfo';
import { AiFillHeart, AiOutlineHome } from 'react-icons/ai';
import { BsHouseFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Contact';

const Contact = ({ className }) => {
    return (
        <Wrapper>
            <section id='contact' className={className}>
                <div className='container'>
                    <div className="contacts-container">
                        <ContactInfo
                            name='Adam Sitarčík'
                            phone='+421 904 024 908'
                            email='adamsitarcik21@gmail.com'
                            align='right'
                        />
                        <AiFillHeart className='heart-icon adamsitarcik21@gmail.com' />
                        <ContactInfo
                            name='Diana Benčíková'
                            phone='+421 944 301 946'
                            email='diaben28@gmail.com'
                            align='left'
                        />
                    </div>
                    <div className="adress-container">
                        <div className='divider'></div>
                        <div className='address'>
                            <AiOutlineHome /> Družicová 3, 821 02 Bratislava{' '}
                            <a
                                href='https://goo.gl/maps/QJb9vaPZo6kR74PK6'
                                className='address-icon'
                            >
                                <FaMapMarkerAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Contact;
