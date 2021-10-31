import {
    SWITCH_DISPLAY_MODAL,
} from '../types';

export const switchDisplayMd = () => {
    return (dispatch) => dispatch({ type: SWITCH_DISPLAY_MODAL })
}