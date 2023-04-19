import { useEffect } from 'react';
import { useState } from 'react';
import { Wrapper } from '../assets/wrappers/Countdown';

const Countdown = () => {
    const weddingTime = new Date('2023-05-27T14:30:00+02:00');

    const calculateTimeLeft = () => {
        const difference = weddingTime - new Date();
        let timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    });

    return (
        <Wrapper>
            <div className="countdown-container">
                <div className="countdown-item">
                    <span className="countdown-value">{timeLeft.days}</span>
                    <span className="countdown-unit">
                        {timeLeft.days >= 5 || timeLeft.days === 0
                            ? 'dní'
                            : timeLeft.days === 1
                            ? 'deň'
                            : 'dni'}
                    </span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{timeLeft.hours}</span>
                    <span className="countdown-unit">
                        {timeLeft.hours >= 5 || timeLeft.hours === 0
                            ? 'hodín'
                            : timeLeft.hours === 1
                            ? 'hodina'
                            : 'hodiny'}
                    </span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{timeLeft.minutes}</span>
                    <span className="countdown-unit">
                        {timeLeft.minutes >= 5 || timeLeft.minutes === 0
                            ? 'minút'
                            : timeLeft.minutes === 1
                            ? 'minúta'
                            : 'minúty'}
                    </span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{timeLeft.seconds}</span>
                    <span className="countdown-unit">
                        {timeLeft.seconds >= 5 || timeLeft.seconds === 0
                            ? 'sekúnd'
                            : timeLeft.seconds === 1
                            ? 'sekunda'
                            : 'sekundy'}
                    </span>
                </div>
            </div>
        </Wrapper>
    );
};

export default Countdown;
