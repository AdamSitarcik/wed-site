import { FormRow, FormArea, Alert, OtherGuest, FormCheckbox } from '.';
import { useAppContext } from '../context/appContext.js';

const RegisterForm = () => {
    const {
        registerGuest,
        showAlert,
        displayAlert,
        handleChange,
        handleChangeOthers,
        handleCheckboxChange,
        isLoading,
        firstName,
        lastName,
        message,
        otherGuestNumber,
        otherGuestNames,
        afterDinner,
        busRequest,
        addOtherGuest,
        deleteOtherGuest,
    } = useAppContext();

    const handleChangeHelper = (e) => {
        handleChange({ name: e.target.name, value: e.target.value });
    };

    const handleChangeOthersHelper = (e, index) => {
        let guests = [...otherGuestNames];
        guests[index][e.target.name] = e.target.value;
        handleChangeOthers({ guests });
    };

    const handleChangeCheckboxHelper = (e) => {
        handleCheckboxChange({
            name: e.target.name,
            checked: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            displayAlert();
            return;
        }

        const currentGuest = {
            firstName,
            lastName,
            message,
            otherGuestNumber,
            otherGuestNames,
            afterDinner,
            busRequest,
        };

        registerGuest({ currentGuest });
    };

    return (
        <div className="form-container">
            {showAlert && <Alert />}
            <form onSubmit={handleSubmit} className="form">
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
                    placeholder="Intolerancie, vegetariánske menu, detská stolička/menu alebo iné špeciálne požiadavky :)"
                    className="text-area input"
                />

                <FormCheckbox
                    message="Prídem/e po 20:00"
                    name="afterDinner"
                    onChange={handleChangeCheckboxHelper}
                />

                <FormCheckbox
                    message="Mám/e záujem o odvoz z kostola"
                    name="busRequest"
                    onChange={handleChangeCheckboxHelper}
                />

                {otherGuestNumber > 0 && (
                    <div className="other-guests-container">
                        <label>Ďalší hostia</label>
                        {otherGuestNames.map((otherGuest, index) => {
                            return (
                                <OtherGuest
                                    key={index}
                                    type="text"
                                    name="name"
                                    value={otherGuest.name}
                                    placeholder="Meno a priezvisko"
                                    className="other-guest input"
                                    handleChange={(e) =>
                                        handleChangeOthersHelper(e, index)
                                    }
                                    onDeleteClick={() =>
                                        deleteOtherGuest(index)
                                    }
                                />
                            );
                        })}
                    </div>
                )}

                <button
                    type="button"
                    onClick={addOtherGuest}
                    className="add-guest-btn"
                    disabled={otherGuestNumber >= 7}
                >
                    Pridať hosťa
                </button>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                >
                    Potvrdiť účasť
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
