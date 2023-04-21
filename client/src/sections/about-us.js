import { Wrapper } from '../assets/wrappers/AboutUsSection';
import ImageSlider from '../components/ImageSlider';

const AboutUs = ({ className }) => {
    return (
        <Wrapper>
            <section id='about-us' className={className}>
                <p>About us</p>
                <ImageSlider />
            </section>
        </Wrapper>
    );
};

export default AboutUs;
