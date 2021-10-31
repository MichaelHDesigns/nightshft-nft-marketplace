import {
    CREATE_SALE_SUCCESS,
    LOAD_ITEMS_SUCCESS,
    SET_LOADING_STATE,
    SET_ERROR_MESSAGE,
    SET_SOLD_ITEMS,
    SET_MARKET_ITEMS,
    SET_CONNECTION_INSTANCE
} from './types';


const initialState = {
    connection: {},
    loading: false,
    error: null,
    createSaleSuccess: null,
    soldItems: [],
    marketItems: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case SET_SOLD_ITEMS:
            return {
                ...state,
                soldItems: action.payload
            }

        case SET_MARKET_ITEMS:
            return {
                ...state,
                marketItems: action.payload
            }

        case CREATE_SALE_SUCCESS:
            return {
                ...state,
                createSaleSuccess: action.payload
            }
        
        case LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                createSaleSuccess: action.payload
            }

        case SET_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            }

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload
            }

        case SET_CONNECTION_INSTANCE:
            return {
                ...state,
                connection: action.payload
            }

        default: return state
    }
}

export default reducer;