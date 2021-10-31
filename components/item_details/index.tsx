import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

// api hooks
import { fetchEthPrice } from 'api-hooks'

// types
import { IItem } from 'types'

// config
import { exploreRoute } from 'config'

// styles
import {
    Main,
    LytFullscreen,
    BtnGoBack,
    Container,
    LeftPane,
    RightPane,
    BtnEnlarge,
    ArtworkTitle,
    ArtworkDesc,
    AuthorInfo,
    PricingInfo,
    CurrentPriceSpan,
    ContractInfo,
    ImageFrame,
    ImageFrameBg
} from './styles'

// redux actions
import { buyNft, loadMarketItems } from 'redux/market/actions'


export default function index({ tokenId }:{ tokenId: number }) {
    const { data } = useQuery(['eth-price'], fetchEthPrice)
    const lytFullscreen = useRef(null)
    const [dplFullscreen, setDplFullscreen] = useState<boolean>(false)
    // @ts-ignore
    const { marketItems, loading, error }: { items: IItem[] } = useSelector(state => state.market)
    const dispatch = useDispatch()

    let details: IItem = marketItems.find((i: IItem) => i.tokenId == tokenId)

    const hdlDisplayFullscreen = () => {
        setDplFullscreen(!dplFullscreen)

        if (dplFullscreen) {
            if (document.fullscreenElement)
                document.exitFullscreen()
        } else {
            lytFullscreen.current.requestFullscreen()
        }
    }

    const hdlPurchaseItem = async (details: IItem) => {
        await dispatch(buyNft(details))
        await dispatch(loadMarketItems())
    }

    useEffect(() => dispatch(loadMarketItems()), [])


    if (details) return (
        <React.Fragment>
            <LytFullscreen
            ref={lytFullscreen}
            display={dplFullscreen}>
                <span
                onClick={() => hdlDisplayFullscreen()}>close</span>
                <Image
                src={ details.image }
                alt="fullscreen-img"
                objectFit="cover"
                width="700px"
                height="700px" />
            </LytFullscreen>
            <Main>
                <Link href={exploreRoute}>
                    <BtnGoBack>
                        go back
                    </BtnGoBack>
                </Link>
                <Container>
                    <LeftPane>
                        <ImageFrame>
                            <BtnEnlarge onClick={() => hdlDisplayFullscreen()}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3H21V9" stroke="#F1F1F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 21H3V15" stroke="#F1F1F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 3L14 10" stroke="#F1F1F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 21L10 14" stroke="#F1F1F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </BtnEnlarge>
                            <ImageFrameBg>
                                <Image src={ details.image} alt="author-img" objectFit="cover" layout="fill" />
                            </ImageFrameBg>
                        </ImageFrame>
                    </LeftPane>
                    <RightPane>
                        <ArtworkTitle>{details.name}</ArtworkTitle>
                        <ArtworkDesc>{details.description}</ArtworkDesc>
                        
                        {/* <AuthorInfo>
                            <Image src={ details.author!.avatar } alt="author-img" height="42px" width="42px" />
                            <div id="contain">
                                <div>
                                    <span>Owned By</span>
                                    <span>{ details.author!.name }</span>
                                </div>
                            </div>
                        </AuthorInfo> */}

                        <PricingInfo>
                            <span id="desc">Current Price</span>
                            <div id="contain">
                                <Image src="/eth.svg" alt="eth" width="22px" height="28px" />
                                <div>
                                    <span>ETH { details.price } ≈</span>
                                    { data && (
                                        <span>
                                            ${ (data[0]?.['current_price'] * parseFloat(details.price)).toFixed(2) }
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div id="containB">
                                <button
                                onClick={() => hdlPurchaseItem(details)}
                                id="buy">
                                    Buy Now
                                </button>
                                <Link href={exploreRoute}>
                                    <button id="discover">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3.95837V15.0417" stroke="#F1F1F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.0417 9.5L9.50004 15.0417L3.95837 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        Discover More
                                    </button>
                                </Link>
                            </div>
                        </PricingInfo>

                        <ContractInfo>
                            <div>
                                <span>Contract Address</span>
                                <span>{ details.owner }</span>
                            </div>
                            <div>
                                <span>Token ID</span>
                                <span>{ details.tokenId }</span>
                            </div>
                        </ContractInfo>
                    </RightPane>
                </Container>
            </Main>
        </React.Fragment>
    ) 

    if (loading) 
        return (
            <Main>
                <h1 style={{
                    color: "#F1F1F1"
                }}>
                    Loading...
                </h1>
            </Main>     
        )

    if (!loading && !marketItems.length)
        return (
            <Main>
                <h1 style={{
                    color: "#F1F1F1"
                }}>
                    Item not found.
                </h1>
            </Main>
        )
}