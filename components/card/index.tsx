import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

// redux actions
import { saveItem, removeItem } from 'redux/wishlist/actions'

// styles
import {
    Card,
    CardFooter,
    CardBackground,
    BtnInteraction,
    GuardBottomInfo
} from "./styles"

// types
import { IItem, itemInteraction } from 'types'

// config
import { Default, itemDetailsRoute } from 'config'


export default function card({
    data,
    interactionType
}: {
    data: IItem,
    interactionType: itemInteraction
}) {
    // @ts-ignore
    const {items} = useSelector(state => state.wishlist)
    const dispatch = useDispatch()
    const heartSvg = useRef(null)
    const handleSaveItem = async (item: IItem) => {
        const isSaved = items.filter(i => i.tokenId === item.tokenId)

        if (isSaved.length){
            heartSvg.current.style.fill = "none"
            handleRemoveItem(item)
        } else {
            heartSvg.current.style.fill = Default.White
            dispatch(saveItem(item))
        }
    }
    const handleRemoveItem = (item: IItem) => dispatch(removeItem(item))

    return (
        <Card>
            { interactionType && interactionType === 'save' ? (
                <BtnInteraction onClick={() => handleSaveItem(data)}>
                    <svg ref={heartSvg} width="24px" height="24px" viewBox="0 0 30 28" fill={ "none" } xmlns="http://www.w3.org/2000/svg">
                        <path id="heart" d="M26.0499 5.37833C25.4115 4.78217 24.6534 4.30925 23.8191 3.98659C22.9848 3.66394 22.0905 3.49786 21.1874 3.49786C20.2843 3.49786 19.39 3.66394 18.5557 3.98659C17.7214 4.30925 16.9634 4.78217 16.3249 5.37833L14.9999 6.61499L13.6749 5.37833C12.3853 4.17469 10.6362 3.49849 8.8124 3.49849C6.98861 3.49849 5.23952 4.17469 3.9499 5.37833C2.66029 6.58197 1.93579 8.21445 1.93579 9.91666C1.93579 11.6189 2.66029 13.2514 3.9499 14.455L5.2749 15.6917L14.9999 24.7683L24.7249 15.6917L26.0499 14.455C26.6886 13.8591 27.1953 13.1516 27.541 12.3729C27.8868 11.5942 28.0647 10.7596 28.0647 9.91666C28.0647 9.07376 27.8868 8.23911 27.541 7.46041C27.1953 6.68171 26.6886 5.97421 26.0499 5.37833V5.37833Z" stroke="#f1f1f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </BtnInteraction>
            ):(
                <BtnInteraction onClick={() => handleRemoveItem(data)}>
                    <svg width="24px" height="24px" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3333 8.81375L23.4533 6.875L16 14.5613L8.54663 6.875L6.66663 8.81375L14.12 16.5L6.66663 24.1863L8.54663 26.125L16 18.4387L23.4533 26.125L25.3333 24.1863L17.88 16.5L25.3333 8.81375Z" fill="#f1f1f1"/>
                    </svg>
                </BtnInteraction>
            )}
            <Link href={`${itemDetailsRoute}/${data.tokenId}`}>
                <a>
                <CardBackground>
                    <Image src={data.image} alt={data.name} layout="fill" />
                </CardBackground>
                <CardFooter>
                    <h3>{data.name}</h3>
                    <GuardBottomInfo>
                        <Image src="/174362726.png" alt="author-img" height="32px" width="32px" />
                        <div id="authorInfo">
                            <span>Author</span>
                            <span>Anonymous</span>
                        </div>
                        <div id="priceInfo">
                            <span>{data.price} ETH</span>
                        </div>
                    </GuardBottomInfo>
                </CardFooter>
                </a>
            </Link>
        </Card>
    )
}
