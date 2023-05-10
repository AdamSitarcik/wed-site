import { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import axios from 'axios';
import {
    TOGGLE_NAVBAR,
    DISPLAY_ALERT,
    CLEAR_ALERT,
    BEGIN_REGISTER_USER,
    SUCCESS_REGISTER_USER,
    ERROR_REGISTER_USER,
    CLEAR_VALUES,
    HANDLE_CHANGE,
    HANDLE_CHANGE_OTHERS,
    ADD_OTHER_GUEST,
    DELETE_OTHER_GUEST,
    HANDLE_CHECKBOX_CHANGE,
} from './actions';

const initialState = {
    showSmallNavbar: false,
    sections: [
        { id: 1, text: 'O nás', navigate: 'about-us' },
        { id: 2, text: 'Harmonogram', navigate: 'timeline' },
        { id: 3, text: 'Informácie', navigate: 'info' },
        { id: 4, text: 'Registrácia', navigate: 'register' },
        { id: 5, text: 'Kontakt', navigate: 'contact' },
    ],
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: '',
    firstName: '',
    lastName: '',
    message: '',
    otherGuestNames: [],
    otherGuestNumber: 0,
    afterDinner: false,
    busRequest: false,
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };

    const toggleNavbar = () => {
        dispatch({ type: TOGGLE_NAVBAR });
    };

    const clearValues = () => {
        dispatch({ type: CLEAR_VALUES });
    };

    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    };

    const handleChangeOthers = ({ guests }) => {
        dispatch({
            type: HANDLE_CHANGE_OTHERS,
            payload: { guests },
        });
    };

    const handleCheckboxChange = ({ name, checked }) => {
        dispatch({ type: HANDLE_CHECKBOX_CHANGE, payload: { name, checked } });
    };

    const addOtherGuest = () => {
        const { otherGuestNumber } = state;
        if (otherGuestNumber >= 0 && otherGuestNumber <= 7) {
            dispatch({
                type: ADD_OTHER_GUEST,
            });
        }
    };

    const deleteOtherGuest = (index) => {
        const { otherGuestNumber, otherGuestNames } = state;
        if (otherGuestNumber >= 1) {
            otherGuestNames.splice(index, 1);
            dispatch({ type: DELETE_OTHER_GUEST });
        }
    };

    const registerGuest = async ({ currentGuest }) => {
        dispatch({ type: BEGIN_REGISTER_USER });
        try {
            await axios.post('/api/create-guest', currentGuest);

            dispatch({ type: SUCCESS_REGISTER_USER });
            clearValues();
        } catch (error) {
            console.log(error);
            dispatch({ type: ERROR_REGISTER_USER });
        }
        clearAlert();
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleNavbar,
                registerGuest,
                displayAlert,
                clearAlert,
                clearValues,
                handleChange,
                addOtherGuest,
                deleteOtherGuest,
                handleChangeOthers,
                handleCheckboxChange,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
