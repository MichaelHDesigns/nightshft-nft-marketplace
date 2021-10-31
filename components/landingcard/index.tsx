import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import {
    Card,
    Guard,
    BtnLink,
    GuardBottomInfo
} from './styles'

export default function LandingCard() {
    return (
        <Card>
            <Guard id="glassEffect">
                <BtnLink>
                    <Link href="/explore"><a>
                        <Image
                        src="/arrow-right-circle.svg"
                        alt="right-arrow"
                        width="24"
                        height="24" />
                    </a></Link>
                </BtnLink>
                <h3>
                    BM025_EV1SCER8
                </h3>
                <p>
                    B10MECHA C0LLAB BY OVERFIEND
                </p>
                <GuardBottomInfo>
                    <div
                     style={{
                        borderRadius: '50px',
                        overflow: 'hidden',
                        width: "42px",
                        height: "42px",
                        position: "relative"
                    }}>
                        <Image
                         src="/QmUBGDDL8mce4UqmENL1FmvCVuRwVyuMs2KWN7QnkYs4qJ.gif"
                         alt="author-img"
                         layout="fill"
                         objectFit="cover" />
                    </div>
                    <div id="authorInfo">
                        <span>Author</span>
                        <span>alpevchino</span>
                    </div>
                </GuardBottomInfo>
            </Guard>
        </Card>
    )
}
