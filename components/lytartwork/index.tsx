import React from 'react'

// components
import Card from 'components/card'

// styles

import { Lyt } from './styles'

// items
import { IItem, contextType } from 'types'

export default function lytartwork({
    items,
    context
}:{
    items: IItem[],
    context: contextType
}) {

    return (
        <Lyt>
            { items && items.map((data: IItem) => 
                <Card
                 key={data.tokenId}
                 data={data}
                 interactionType={
                     context === 'wishlist' ?
                     'remove' :
                     'save'
                } />
            )}
        </Lyt>
    )
}
