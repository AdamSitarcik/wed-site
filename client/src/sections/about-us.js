import ImageSlider from '../components/ImageSlider';

const AboutUs = ({className}) => {
    return (
        <section id='about-us' className={className}>
            <p>About us</p>
            <ImageSlider />
        </section>
    );
};

export default AboutUs;
