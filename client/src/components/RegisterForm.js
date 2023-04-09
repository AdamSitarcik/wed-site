import Wrapper from '../assets/wrappers/RegisterForm';
import { FormRow, FormArea } from '.';
import { useAppContext } from '../context/appContext.js';
import { useState } from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    message: '',
};

const RegisterForm = () => {
    const [values, setValues] = useState(initialState);
    const { registerGuest, displayAlert } = useAppContext();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, message } = values;

        if (!firstName || !lastName) {
            displayAlert();
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-container">
                    <FormRow
                        type="text"
                        name="firstName"
                        labelText="Meno"
                        value={values.firstName}
                        handleChange={handleChange}
                        className="first-name input"
                    />

                    <FormRow
                        type="text"
                        name="lastName"
                        labelText="Priezvisko"
                        value={values.lastName}
                        handleChange={handleChange}
                        className="last-name input"
                    />
                    <FormArea
                        name="message"
                        value={values.message}
                        labelText="Poznámka"
                        handleChange={handleChange}
                        placeholder="Intolerancie, vegetariánske menu, detská stolička alebo iné špeciálne požiadavky :)"
                        className="text-area input"
                    />
                    <button type="submit" className="submit-btn">
                        Potvrdiť účasť
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default RegisterForm;
