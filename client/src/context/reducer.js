import { TOGGLE_SIDEBAR } from './actions';
import { initialState } from './appContext.js';

const reducer = (state, action) => {
    if (action.type === TOGGLE_SIDEBAR) {
        return { ...state, showSidebar: !state.showSidebar };
    }
};

export default reducer;
