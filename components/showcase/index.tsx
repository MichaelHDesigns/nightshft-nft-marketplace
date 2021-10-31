import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"


// components
import LandingCard from 'components/landingcard'

// redux actions
import { switchDisplayMd } from 'redux/mdpublishnew/actions'

import items from '../../mock-artwork'

// styles
import { 
    BtnCreate,
    BtnExplore,
    InfoSection,
    CTASection,
    CTRSection,
    Lyt,
    Hero
} from "./styles"


export default function showcase() {
    //@ts-ignore
    // const { marketItems } = useSelector(state => state.market)
    const [totalArtists, setTotalArtists] = useState<string[]>([])
    const marketItems = items // TODO: remove
    const dispatch = useDispatch()

    const hdlDisplayMd = () => dispatch(switchDisplayMd())
    const countArtists = () => 
        marketItems.forEach((i) => {
            if (!totalArtists.includes(i.owner)) setTotalArtists(totalArtists.concat(i.owner))
        })

    useEffect(() => countArtists(), [])
    
    return (
        <Hero>
            <span style={{
                position: "absolute",
                top: "15%",
                left: "25%"
            }}>
                <Image src="/raydown.svg" alt="raydown" width="55" height="73" />
            </span>
            <Lyt>
                <InfoSection>
                    <motion.div
                     initial="hidden"
                     animate="visible"
                     variants={{
                        hidden: {
                            scale: .2,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .3
                            }
                        },
                    }}>
                        <span>
                            nft marketplace
                        </span>
                        <h1>
                            Discover, collect and sell exclusive digital artworks by world class artists.
                        </h1>
                    </motion.div>
                </InfoSection>
                <CTASection>
                    <Link href="/explore"><a>
                        <BtnExplore>Explore</BtnExplore>
                    </a></Link>
                    <BtnCreate onClick={() => hdlDisplayMd()}>Create</BtnCreate>
                </CTASection>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                    hidden: {
                        scale: .2,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .5
                        }
                    },
                }}>
                    <CTRSection>
                        <div style={{
                            marginRight: "2em"
                        }}>
                            <h2>
                                { marketItems ? marketItems.length - 1 : 0 }+
                            </h2>
                            <span>
                                Exclusive NTFs
                            </span>
                        </div>
                        <div>
                            <h2>
                                { totalArtists.length }
                            </h2>
                            <span>
                                Digital Artists
                            </span>
                        </div>
                    </CTRSection>
            </motion.div>
            </Lyt>
            <Lyt
             as={motion.div}
             initial="hidden"
             animate="visible"
             variants={{
                 hidden: {
                     scale: .7,
                     opacity: 0
                 },
                 visible: {
                    opacity: 1,
                    scale: 1,
                    filter: [
                        'hue-rotate(0) contrast(100%)',
                        'hue-rotate(360deg) contrast(600%)',
                        'hue-rotate(45deg) contrast(500%)',
                        'hue-rotate(0) contrast(100%)'
                    ],
                    transition: {
                        duration: .4
                    }
                 }
            }}>
                <LandingCard />
            </Lyt>
        </Hero>
    )
}
