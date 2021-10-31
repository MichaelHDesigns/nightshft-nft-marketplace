import setupMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// mock data
import _items from '../mock-artwork'

// redux
import { initialState } from '../redux/wishlist/reducer'
import { INSERT_ITEM, REMOVE_ITEM } from '../redux/wishlist/types'
import { saveItem, removeItem } from '../redux/wishlist/actions'

const middlewares = [thunk]
const createStore = setupMockStore(middlewares)
const store = createStore(initialState)

describe("check wishlist actions", () => {

    test("insert element", async () => {
        const { getActions, dispatch, clearActions } = store
        
        await dispatch(saveItem(_items[0]))

        const actions = getActions()
        const expectedPayload = { 
            payload: _items[0],
            type: INSERT_ITEM
        }

        expect(actions).toEqual([expectedPayload])
        clearActions()
    })

    test("remove element", async () => {
        const { getActions, dispatch } = store

        await dispatch(removeItem(_items[0]))

        const actions = getActions()
        const expectedPayload = { 
            payload: _items[0],
            type: REMOVE_ITEM
        }

        expect(actions).toEqual([expectedPayload])
    })
})