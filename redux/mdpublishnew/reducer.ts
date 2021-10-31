import {
    SWITCH_DISPLAY_MODAL,
} from './types';

export const initialState = {
    display: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case SWITCH_DISPLAY_MODAL:
            return {
                ...state,
                display: !state.display
            }

        default: return state
    }
}

export default reducer;