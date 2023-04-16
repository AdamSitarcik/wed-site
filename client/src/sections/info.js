import { Wrapper } from '../assets/wrappers/InfoSection.js';
import { AiOutlineGift } from 'react-icons/ai';
import { BsFlower3, BsPinMap } from 'react-icons/bs';
import { CiParking1 } from 'react-icons/ci';
import { BiHotel } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { MapSymbol } from '../components';
import { Link } from 'react-scroll';

const Info = ({ className }) => {
    return (
        <Wrapper>
            <section id="info" className={className}>
                <h1 className="section-title">Ďalšie info</h1>
                <div className="info-container">
                    <ul>
                        <li className="info-item">
                            <div className="item-title">Miesto</div>
                            <div className="icon">
                                <BsPinMap />
                            </div>
                            <div className="item-description">
                                <div>
                                    Obrad -{' '}
                                    <a href="https://goo.gl/maps/Vup4UWcADFgqqyZV8">
                                        Veľký evanjelický kostol, Konventná 14,
                                        811 03 Bratislava
                                    </a>
                                </div>
                                <div>
                                    Večera -{' '}
                                    <a href="https://goo.gl/maps/22Ey4DAtQBNvx3sh8">
                                        Dom Kultúry Vajnory, Pod lipami 10036/2,
                                        831 07 Vajnory
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="info-item">
                            <div className="item-title">Dary</div>
                            <div className="icon">
                                <AiOutlineGift />
                            </div>
                            <div className="item-description">
                                Máme všetky paplóny, hrnce a dokonca aj príbory.
                                Viac nás poteší, ak prispejete finančne, na naše cestovanie či
                                iné zážitky 😊
                            </div>
                        </li>
                        <li className="info-item">
                            <div className="item-title">Kvety</div>
                            <div className="icon">
                                <BsFlower3 />
                            </div>
                            <div className="item-description">
                                Sme eko, tak prosíme bez kvetov 😉. Ak to ale inak nejde, tak v budúcnosti po svadbe nám radšej kúpte kyticu, ktorej sa potešíme naplno.
                            </div>
                        </li>
                        <li className="info-item">
                            <div className="item-title">Parkovanie</div>
                            <div className="icon">
                                <CiParking1 />
                            </div>
                            <div className="item-description">
                                <div>
                                    <a href="https://goo.gl/maps/fxL3gzu2JAmHhhAi6">
                                        Parkovisko pri kostole
                                    </a>
                                </div>
                                <div>DK Vajnory - zmestí sa ~10 áut</div>
                            </div>
                        </li>
                        <li className="info-item">
                            <div className="item-title">Doprava</div>
                            <div className="icon">
                                <MdOutlineEmojiTransportation />
                            </div>
                            <div className="item-description">
                                <div>
                                    Na odvoz od kostola bude zabezpečený autobus
                                </div>
                                <div>MHD - autobus č. 53, zastávka Vajnory</div>
                                <div>
                                    Odvoz po svadbe - budú k dispozícii dve autá
                                </div>
                            </div>
                        </li>
                        <li className="info-item">
                            <div className="item-title">Ubytovanie</div>
                            <div className="icon">
                                <BiHotel />
                            </div>
                            <div className="item-description">
                                <Link to="contact" smooth={true}>
                                    Ak je potrebné, dajte nám vedieť 🙂
                                </Link>
                            </div>
                        </li>
                        {/* <li className="info-item">
                            <div className="item-title"></div>
                            <div className="icon"></div>
                            <div className="item-description"></div>
                        </li>
                        <li className="info-item">
                            <div className="item-title"></div>
                            <div className="icon"></div>
                            <div className="item-description"></div>
                        </li> */}
                    </ul>
                </div>
            </section>
        </Wrapper>
    );
};

export default Info;
