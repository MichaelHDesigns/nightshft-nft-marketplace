import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Lytartwork from "components/lytartwork"

// config
import { Container, Title } from 'components/dashboard/styles'

// types
import { IItem } from 'types'
import { loadMarketItems } from 'redux/market/actions'

export default function Explore() {
    // @ts-ignore
    const { marketItems }:{ marketItems: [] | IItem[] } = useSelector(state => state.market)
    const dispatch = useDispatch()

    useEffect(() => {
        if (marketItems) console.log('marketItems', marketItems)
    }, [marketItems])

    useEffect(() => dispatch(loadMarketItems()), [])

    return (
        <Container>
            <Title>
                Featured artwork
            </Title>
            { marketItems && marketItems.length > 0 ? (
                <Lytartwork items={marketItems} context={'explore'} />
            ) : (
                <h4>
                    Items not found.
                </h4>
            )}
        </Container>
    )
}
