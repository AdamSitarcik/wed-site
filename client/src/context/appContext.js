import { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import { TOGGLE_NAVBAR } from './actions';

const initialState = {
    showSmallNavbar: false,
    sections: [
        { id: 1, text: 'O nás', navigate: 'about-us' },
        { id: 2, text: 'Harmonogram', navigate: 'timeline' },
        { id: 3, text: 'Informácie', navigate: 'info' },
        { id: 4, text: 'Registrácia', navigate: 'register' },
        { id: 5, text: 'Kontakt', navigate: 'contact' },
    ],
    showAlert: false,
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const showAlert = () => {
        console.log('show alert');
    };

    const clearAlert = () => {
        console.log('clear alert');
    };

    const toggleNavbar = () => {
        dispatch({ type: TOGGLE_NAVBAR });
    };

    const registerGuest = () => {
        console.log('registrovat');
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleNavbar,
                registerGuest,
                showAlert,
                clearAlert,
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
