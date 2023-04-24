import { Wrapper } from '../assets/wrappers/AboutUsSection';
import ImageSlider from '../components/ImageSlider';

const AboutUs = ({ className }) => {
    return (
        <Wrapper>
            <section id='about-us' className={className}>
                <h1 className="section-title">O nás</h1>
                <ImageSlider />
            </section>
        </Wrapper>
    );
};

export default AboutUs;
