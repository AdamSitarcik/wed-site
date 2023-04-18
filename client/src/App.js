import { useEffect } from 'react';

import {
    Register,
    AboutUs,
    Contact,
    Timeline,
    Info,
    Landing,
} from './sections';

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
        <div>
            <div className='sections'>
                <Landing className='section-container landing-section' />
                <AboutUs className='section-container dark' />
                <Timeline className='section-container' />
                <Info className='section-container dark' />
                <Register className='section-container' />
                <Contact className='section-container dark contact-section' />
            </div>
        </div>
    );
}

export default App;
