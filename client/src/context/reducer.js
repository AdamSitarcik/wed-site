import { TOGGLE_NAVBAR } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return { ...state, showSmallNavbar: !state.showSmallNavbar };
        default:
            throw new Error(`No such action ${action.type}`);
    }
};

export default reducer;
