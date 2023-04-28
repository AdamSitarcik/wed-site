import { Wrapper } from '../assets/wrappers/InfoSection.js';
import { AiOutlineGift } from 'react-icons/ai';
import { BsFlower3, BsPinMap } from 'react-icons/bs';
import { CiParking1 } from 'react-icons/ci';
import { BiHotel } from 'react-icons/bi';
import { MdOutlineEmojiTransportation } from 'react-icons/md';
import { Link } from 'react-scroll';
import { InfoItem } from '../components';

const Info = ({ className }) => {
    return (
        <Wrapper>
            <section id='info' className={className}>
                <div className='dark-bckg-container'></div>
                <h1 className='section-title'>Ďalšie info</h1>
                <div className='info-container'>
                    <ul>
                        <InfoItem
                            title='Miesto'
                            icon={<BsPinMap />}
                            description={
                                <div className='item-description'>
                                    <div>
                                        Obrad -{' '}
                                        <a href='https://goo.gl/maps/Vup4UWcADFgqqyZV8'>
                                            Veľký evanjelický kostol, Konventná
                                            14, 811 03 Bratislava
                                        </a>
                                    </div>
                                    <div>
                                        Večera -{' '}
                                        <a href='https://goo.gl/maps/22Ey4DAtQBNvx3sh8'>
                                            Dom Kultúry Vajnory, Pod lipami
                                            10036/2, 831 07 Vajnory
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                        <InfoItem
                            title='Dary'
                            icon={<AiOutlineGift />}
                            description={
                                <div className='item-description'>
                                    Máme všetky paplóny, hrnce a dokonca aj
                                    príbory. Viac nás poteší, ak prispejete
                                    finančne, na naše cestovanie či iné zážitky
                                    😊
                                </div>
                            }
                        />
                        <InfoItem
                            title='Kvety'
                            icon={<BsFlower3 />}
                            description={
                                <div className='item-description'>
                                    {' '}
                                    Chceme byť eko, tak prosíme bez kvetov 😉.
                                    Ak to ale inak nejde, tak v budúcnosti po
                                    svadbe nám radšej kúpte kyticu, ktorej sa
                                    potešíme naplno.
                                </div>
                            }
                        />
                        <InfoItem
                            title='Parkovanie'
                            icon={<CiParking1 />}
                            description={
                                <div className='item-description'>
                                    <div>
                                        <a href='https://goo.gl/maps/fxL3gzu2JAmHhhAi6'>
                                            Parkovisko pri kostole
                                        </a>
                                    </div>
                                    <div>DK Vajnory - zmestí sa ~10 áut</div>
                                </div>
                            }
                        />
                        <InfoItem
                            title='Doprava'
                            icon={<MdOutlineEmojiTransportation />}
                            description={
                                <div className='item-description'>
                                    <div>
                                        Na odvoz od kostola bude zabezpečený
                                        autobus
                                    </div>
                                    <div>
                                        MHD - autobus č. 53, zastávka Vajnory
                                    </div>
                                    <div>
                                        Odvoz po svadbe - budú k dispozícii dve
                                        autá
                                    </div>
                                </div>
                            }
                        />
                        <InfoItem
                            title='Ubytovanie'
                            icon={<BiHotel />}
                            description={
                                <div className='item-description'>
                                    <Link to='contact' smooth={true}>
                                        Ak je potrebné, dajte nám vedieť 🙂
                                    </Link>
                                </div>
                            }
                        />
                    </ul>
                </div>
            </section>
        </Wrapper>
    );
};

export default Info;
