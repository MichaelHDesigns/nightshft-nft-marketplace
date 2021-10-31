import {
    INSERT_ITEM,
    REMOVE_ITEM
} from '../types'

// global types
import { IItem } from '../../../types'

export const saveItem = (item: IItem) => {
    return (dispatch, getState) => {
        const { wishlist } = getState()
        const payload = wishlist.items.includes(item) ? wishlist.items : [item].concat(wishlist.items)

        if (item) dispatch({ type: INSERT_ITEM, payload })
    }
}

export const removeItem = (item: IItem) => {
    return (dispatch, getState) => {
        const { wishlist } = getState()
        const payload = wishlist.items.filter((i: IItem) => i.tokenId !== item.tokenId)

        if (item) dispatch({ type: REMOVE_ITEM, payload })
    }
}