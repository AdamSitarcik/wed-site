import Wrapper from '../assets/wrappers/TimelineSection';
import { AiOutlineBell } from 'react-icons/ai';
import { TbHeartHandshake, TbBus } from 'react-icons/tb';
import { SiJusteat } from 'react-icons/si';
import { BiParty } from 'react-icons/bi';

const Timeline = ({ className }) => {
    return (
        <Wrapper>
            <section id="timeline" className={className}>
                <h1 className="section-title">Svadobný harmonogram</h1>
                <div className="timeline-container">
                    <ul>
                        <li className="timeline-item">
                            <div className="time">14:30</div>
                            <div className="icon">
                                <AiOutlineBell />
                            </div>
                            <div className="item-description">Obrad</div>
                        </li>
                        <li className="timeline-item">
                            <div className="time">15:00</div>
                            <div className="icon">
                                <TbHeartHandshake />
                            </div>
                            <div className="item-description">
                                Gratulácie pred kostolom
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="time">15:45</div>
                            <div className="icon">
                                {' '}
                                <TbBus />{' '}
                            </div>
                            <div className="item-description">
                                Presun do DK Vajnory
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="time">17:30</div>
                            <div className="icon">
                                <SiJusteat />
                            </div>
                            <div className="item-description">
                                Svadobná večera
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="time">20:00</div>
                            <div className="icon">
                                <BiParty />
                            </div>
                            <div className="item-description">
                                Zábava až do rána
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Wrapper>
    );
};

export default Timeline;
