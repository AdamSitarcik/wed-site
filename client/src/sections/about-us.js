import { Wrapper } from '../assets/wrappers/AboutUsSection';
import ImageSlider from '../components/ImageSlider';
import { BsArrowThroughHeart } from 'react-icons/bs';
import { GiDiamondRing } from 'react-icons/gi';
import { BiChurch } from 'react-icons/bi';

const AboutUs = ({ className }) => {
    return (
        <Wrapper>
            <section id='about-us' className={className}>
                <h1 className='section-title'>O nás</h1>

                <div className='timeline-container'>
                    <ul>
                        <li className='timeline-item'>
                            <div className='date'>2002</div>
                            <div className='icon'>
                                <img src="DFS-Lucka-logo.svg" alt="" className='fsk-logo' />
                            </div>
                            <div className='description'>
                                Prvé stretnutie v DFS Lúčka{' '}
                            </div>
                        </li>
                        <li className='timeline-item'>
                            <div className='date'>2013</div>
                            <div className='icon'>
                                <img src='logo_fsk_cierne.svg' alt='' className='fsk-logo'/>
                            </div>
                            <div className='description'>
                                Začiatok spoločného pôsobenia v Karpatoch
                            </div>
                        </li>
                        <li className='timeline-item'>
                            <div className='date'>1.8.2019</div>
                            <div className='icon'>
                                <BsArrowThroughHeart />
                            </div>
                            <div className='description'>
                                {' '}
                                Náš "oficiálny" začiatok
                            </div>
                        </li>
                        <li className='timeline-item'>
                            <div className='date'>5.6.2022</div>
                            <div className='icon'>
                                <GiDiamondRing />
                            </div>
                            <div className='description'>Povedala ÁNO!</div>
                        </li>
                        <li className='timeline-item'>
                            <div className='date'>27.5.2023</div>
                            <div className='icon'>
                                <BiChurch />
                            </div>
                            <div className='description'>
                                Tu všetko končí (alebo začína?)
                            </div>
                        </li>
                    </ul>
                </div>
                <ImageSlider />
            </section>
        </Wrapper>
    );
};

export default AboutUs;
