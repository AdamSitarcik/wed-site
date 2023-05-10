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

const reducer = (state, action) => {
    const { otherGuestNumber, otherGuestNames } = state;

    switch (action.type) {
        case TOGGLE_NAVBAR:
            return { ...state, showSmallNavbar: !state.showSmallNavbar };

        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertText: 'Prosím vyplňte meno aj priezvisko!',
                alertType: 'danger',
            };

        case CLEAR_ALERT:
            return { ...state, showAlert: false, alertText: '', alertType: '' };

        case CLEAR_VALUES:
            const initialState = {
                firstName: '',
                lastName: '',
                message: '',
                otherGuestNames: [],
                otherGuestNumber: 0,
                afterDinner: false,
                busRequest: false,
            };
            return { ...state, ...initialState };

        case HANDLE_CHANGE:
            return { ...state, [action.payload.name]: action.payload.value };

        case HANDLE_CHANGE_OTHERS:
            return { ...state, otherGuestNames: [...action.payload.guests] };

        case HANDLE_CHECKBOX_CHANGE:
            return { ...state, [action.payload.name]: action.payload.checked };

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

        case ADD_OTHER_GUEST:
            return {
                ...state,
                otherGuestNames: otherGuestNames.concat([{ name: '' }]),
                otherGuestNumber: otherGuestNumber + 1,
            };

        case DELETE_OTHER_GUEST:
            return { ...state, otherGuestNumber: otherGuestNumber - 1 };

        default:
            throw new Error(`No such action ${action.type}`);
    }
};

export default reducer;
