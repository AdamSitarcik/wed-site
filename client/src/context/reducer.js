import { TOGGLE_NAVBAR } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return { ...state, showSmallNavbar: !state.showSmallNavbar };
    }
};

export default reducer;
