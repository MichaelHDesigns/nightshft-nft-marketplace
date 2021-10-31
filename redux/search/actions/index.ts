import { SET_FILTERED_ITEMS } from '../types'
import { IItem } from 'types'

export const setFilteredItems = (items: IItem[]) => dispatch => {
    dispatch({ type: SET_FILTERED_ITEMS, payload: items })
}