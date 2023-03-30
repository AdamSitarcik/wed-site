// import logo from './logo_black.svg';
import BigNavbar from './components/BigNavbar';
import SmallNavbar from './components/SmallNavbar';
import Background from './components/Background';

import {
    Register,
    AboutUs,
    Contact,
    Timeline,
    Info,
    Landing,
} from './sections';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BigNavbar />
                <SmallNavbar />
            </header>
            {/* <Background /> */}
            <div className="sections">
                <Landing className="section-container landing-section" />
                <AboutUs className="section-container dark" />
                <Timeline className="section-container" />
                <Info className="section-container dark" />
                <Register className="section-container" />
                <Contact className="section-container dark" />
            </div>
        </div>
    );
}

export default App;
