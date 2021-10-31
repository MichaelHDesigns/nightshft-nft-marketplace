import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

// hooks
import { useDebounce } from './hooks'

// actions
import { setFilteredItems } from 'redux/search/actions'

// styles
import {
    SearchBar,
    SearchBarInput,
} from './styles'

// types
import { IItem } from 'types'

export default function index({
    showResults,
    dplShowResults
}: {
    showResults: boolean,
    dplShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    // @ts-ignore
    const { marketItems } = useSelector(state => state.market)
    const dispatch = useDispatch()
    
    const filterItems = async (query: string): Promise<void> => {
        let items: IItem[] = []

        if (query)
            items = await marketItems.filter(item => item.name.startsWith(query))

        dispatch(setFilteredItems(items))
    }

    useDebounce(() => filterItems(searchQuery), 500, searchQuery)

    return (
        <SearchBar>
            <SearchBarInput
            placeholder="Search..."
            value={searchQuery}
            onFocus={() => dplShowResults(!showResults)}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <Image
            src="/search.svg"
            alt="search"
            width="20px"
            height="20px" />
        </SearchBar>
    )
}