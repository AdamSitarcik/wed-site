import { RegisterForm } from '../components';
import { Wrapper } from '../assets/wrappers/RegisterSection';

const Register = ({ className }) => {
    const showRegisterForm = false;

    return (
        <Wrapper>
            <section id='register' className={className}>
                <div className='header'>
                    <h1>Potvrdenie účasti</h1>
                    <h3>pozvaných hostí</h3>
                </div>
                {showRegisterForm ? (
                    <RegisterForm />
                ) : (
                    <div className='no-form-container'>
                        Záväzné potvrdenie účasti bude spustené týždeň pred
                        svadbou (20.5.2023) 🙂
                    </div>
                )}
            </section>
        </Wrapper>
    );
};

export default Register;
