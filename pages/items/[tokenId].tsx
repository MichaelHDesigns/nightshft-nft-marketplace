import React from 'react'

// components
import ItemDetails from 'components/item_details'

export default function Item ({ tokenId }) {
    return (
        <ItemDetails tokenId={tokenId} />
    )
}

export async function getServerSideProps (ctx) {
    const { tokenId } = ctx.query

    return {
        props: {
            tokenId
        }
    }
}