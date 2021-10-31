import cookie from 'js-cookie'

import {
    INSERT_ITEM,
    REMOVE_ITEM
} from './types';

// types
import { IItem } from 'types'


export const initialState = {
    items: cookie.get("items") ? JSON.parse(cookie.get("items")) : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case INSERT_ITEM:
            cookie.set("items", JSON.stringify(action.payload))
            return { ...state, items: action.payload }

        case REMOVE_ITEM:
            cookie.set("items", JSON.stringify(action.payload))
            return { ...state, items: action.payload }

        default: return state
    }
}

export default reducer;