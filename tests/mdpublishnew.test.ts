import setupMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// redux
import { initialState } from '../redux/mdpublishnew/reducer'
import { SWITCH_DISPLAY_MODAL } from '../redux/mdpublishnew/types'
import { switchDisplayMd } from '../redux/mdpublishnew/actions'

const middlewares = [thunk]
const createStore = setupMockStore(middlewares)
const store = createStore(initialState)

describe("check mdpublishnew actions", () => {

    test("initial state is falsy", () => {
        const { getState } = store
        const { display } = getState()

        expect(display).toBe(false)
    })

    test("switch display state", async () => {
        const { getActions, dispatch, getState } = store
        
        await dispatch(switchDisplayMd())

        const actions = getActions()
        const expectedPayload = {
            type: SWITCH_DISPLAY_MODAL
        }

        expect(actions).toEqual([expectedPayload])
    })
})