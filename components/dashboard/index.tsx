import React from 'react'

import { Container, Title } from './styles'

export default function index() {


    return (
        <Container>
            <Title>
                Your collectibles
            </Title>
            {/* { marketItems && marketItems.length > 0 ? (
                <Lytartwork items={marketItems} context={'explore'} />
            ) : (
                <h4 style={{
                    color: "#F1F1F1"
                }}>
                    Items not found.
                </h4>
            )} */}
        </Container>
    )
}
