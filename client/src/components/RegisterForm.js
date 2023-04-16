import { FormRow, FormArea, Alert } from '.';
import { useAppContext } from '../context/appContext.js';

const RegisterForm = () => {
    const {
        registerGuest,
        showAlert,
        displayAlert,
        handleChange,
        isLoading,
        firstName,
        lastName,
        message,
    } = useAppContext();

    const handleChangeHelper = (e) => {
        handleChange({ name: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            displayAlert();
            return;
        }

        const currentGuest = { firstName, lastName, message };

        registerGuest({ currentGuest });
    };

    return (
        <div>
            {showAlert && <Alert />}
            <form onSubmit={handleSubmit} className="form">
                <div className="form-container">
                    <FormRow
                        type="text"
                        name="firstName"
                        labelText="Meno"
                        value={firstName}
                        handleChange={handleChangeHelper}
                        className="first-name input"
                    />

                    <FormRow
                        type="text"
                        name="lastName"
                        labelText="Priezvisko"
                        value={lastName}
                        handleChange={handleChangeHelper}
                        className="last-name input"
                    />
                    <FormArea
                        name="message"
                        value={message}
                        labelText="Poznámka"
                        handleChange={handleChangeHelper}
                        placeholder="Intolerancie, vegetariánske menu, detská stolička alebo iné špeciálne požiadavky :)"
                        className="text-area input"
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isLoading}
                    >
                        Potvrdiť účasť
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
