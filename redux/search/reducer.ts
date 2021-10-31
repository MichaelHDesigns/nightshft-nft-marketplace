import { SET_FILTERED_ITEMS } from './types'

const initialState = {
    items: []
}

export default function reducer(state = initialState, action){
    switch(action.type){

        case SET_FILTERED_ITEMS:
            return {
                ...state,
                items: action.payload
            }

        default: return state
    }
}