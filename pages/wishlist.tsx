import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// components
import Lytartwork from 'components/lytartwork'

// config
import { Default, Device } from 'config'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10vh 2em;
    min-width: 100%;
    min-height: 90vh;

    p {
        color: ${Default.Gray};
    }

    @media (min-width: ${Device.mobileXS}){
        padding: 10vh 10vw;
    }
`

const Title = styled.h1`
    color: ${Default.White};
`

export default function Wishlist() {
    //@ts-ignore
    let { items } = useSelector(state => state.wishlist)
    
    return (
        <Container>
            <Title>
                Saved items
            </Title>
            { items && items.length > 0 ?
                <Lytartwork items={items} context={'wishlist'} /> :
                <p>Your wishlist is empty.</p> }
        </Container>
    )
}
