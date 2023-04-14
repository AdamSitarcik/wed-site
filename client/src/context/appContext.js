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
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const fetch = axios.create({ baseURL: '/api' });

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
