import {
    TOGGLE_NAVBAR,
    DISPLAY_ALERT,
    CLEAR_ALERT,
    BEGIN_REGISTER_USER,
    SUCCESS_REGISTER_USER,
    ERROR_REGISTER_USER,
    CLEAR_VALUES
} from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return { ...state, showSmallNavbar: !state.showSmallNavbar };

        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertText: 'Prosím vyplňte meno a priezvisko!',
                alertType: 'danger',
            };

        case CLEAR_ALERT:
            return { ...state, showAlert: false, alertText: '', alertType: '' };

        case CLEAR_VALUES:
            const initialState = {
                firstName: '',
                lastName: '',
                message: '',
            };
            return { ...state, ...initialState };

        case BEGIN_REGISTER_USER:
            return { ...state, isLoading: true };

        case SUCCESS_REGISTER_USER:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertText: 'Ďakujeme za potrdenie účasti!',
                alertType: 'success',
            };

        case ERROR_REGISTER_USER:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertText: 'Ajaj, niečo sa stalo!',
                alertType: 'danger',
            };

        default:
            throw new Error(`No such action ${action.type}`);
    }
};

export default reducer;
