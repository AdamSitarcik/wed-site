import { FormRow, FormArea, Alert, OtherGuest } from '.';
import { useAppContext } from '../context/appContext.js';

const RegisterForm = () => {
    const {
        registerGuest,
        showAlert,
        displayAlert,
        handleChange,
        handleChangeOthers,
        isLoading,
        firstName,
        lastName,
        message,
        otherGuestNumber,
        otherGuestNames,
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
        };

        registerGuest({ currentGuest });
    };

    return (
        <div className='form-container'>
            {showAlert && <Alert />}
            <form onSubmit={handleSubmit} className='form'>
                <FormRow
                    type='text'
                    name='firstName'
                    labelText='Meno'
                    value={firstName}
                    handleChange={handleChangeHelper}
                    className='first-name input'
                />

                <FormRow
                    type='text'
                    name='lastName'
                    labelText='Priezvisko'
                    value={lastName}
                    handleChange={handleChangeHelper}
                    className='last-name input'
                />
                <FormArea
                    name='message'
                    value={message}
                    labelText='Poznámka'
                    handleChange={handleChangeHelper}
                    placeholder='Intolerancie, vegetariánske menu, detská stolička alebo iné špeciálne požiadavky :)'
                    className='text-area input'
                />

                {otherGuestNumber > 0 && (
                    <div className='other-guests-container'>
                        <label>Ďalší hostia</label>
                        {otherGuestNames.map((otherGuest, index) => {
                            return (
                                <OtherGuest
                                    key={index}
                                    type='text'
                                    name='name'
                                    value={otherGuest.name}
                                    placeholder='Meno a priezvisko'
                                    className='other-guest input'
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
                    type='button'
                    onClick={addOtherGuest}
                    className='add-guest-btn'
                    disabled={otherGuestNumber >=7}
                >
                    Pridať hosťa
                </button>

                <button
                    type='submit'
                    className='submit-btn'
                    disabled={isLoading}
                >
                    Potvrdiť účasť
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
