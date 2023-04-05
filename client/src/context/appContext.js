import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import { TOGGLE_NAVBAR } from './actions';

const initialState = {
    showSmallNavbar: true,
    sections: [
        { id: 1, text: 'O nás', navigate: 'about-us' },
        { id: 2, text: 'Harmonogram', navigate: 'timeline' },
        { id: 3, text: 'Informácie', navigate: 'info' },
        { id: 4, text: 'Registrácia', navigate: 'register' },
        { id: 5, text: 'Kontakt', navigate: 'contact' },
    ],
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleNavbar = () => {
        // dispatch({ type: TOGGLE_NAVBAR });
        console.log('toggle');
    };

    return (
        <AppContext.Provider value={{ ...state, toggleNavbar }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
