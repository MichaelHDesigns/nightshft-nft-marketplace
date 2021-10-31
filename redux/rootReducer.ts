import { combineReducers } from 'redux'

// reducers
import wishlistReducer from './wishlist/reducer'
import mdpublishnewReducer from './mdpublishnew/reducer'
import marketReducer from './market/reducer'
import searchReducer from './search/reducer'

export default combineReducers({
    wishlist: wishlistReducer,
    mdpublishnew: mdpublishnewReducer,
    market: marketReducer,
    searchResults: searchReducer
})