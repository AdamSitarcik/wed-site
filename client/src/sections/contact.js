import { ContactInfo } from '../components';
import { AiFillHeart, AiOutlineHome } from 'react-icons/ai';
import { Wrapper } from '../assets/wrappers/ContactSection';

const Contact = ({ className }) => {
    return (
        <Wrapper>
            <section id="contact" className={className}>
                <h1 className="section-title">Kontakt na nás</h1>
                <div className="container">
                    <div className="contacts-container">
                        <ContactInfo
                            name="Diana Benčíková"
                            phone="+421 944 301 946"
                            email="diaben28@gmail.com"
                            align="center"
                            facebook="https://www.facebook.com/dbencikova"
                        />
                        <AiFillHeart className="heart-icon adamsitarcik21@gmail.com" />
                        <ContactInfo
                            name="Adam Sitarčík"
                            phone="+421 904 024 908"
                            email="adamsitarcik21@gmail.com"
                            align="center"
                            facebook="https://www.facebook.com/adam.sitarcik.3/"
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="adress-container">
                        <div className="address">
                            <AiOutlineHome />{' '}
                            <a href="https://goo.gl/maps/QJb9vaPZo6kR74PK6">
                                Družicová 3, 821 02 Bratislava
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Contact;
