import RegisterForm from '../components/RegisterForm';
import Wrapper from '../assets/wrappers/RegisterSection';

const Register = ({ className }) => {
    return (
        <Wrapper>
            <section id="register" className={className}>
                <h1 className="section-title">Potvrdenie účasti</h1>
                <RegisterForm />
            </section>
        </Wrapper>
    );
};

export default Register;
