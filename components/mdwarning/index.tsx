import React, { useState } from 'react'
import Image from 'next/image'

//styles
import { 
    MdLayout,
    BtnClose,
    Md
} from './styles'

export default function mdwarning() {
    const [dplMd, setDplMd] = useState<boolean>(true)

    const closeMd = () => setDplMd(false)

    return (
        <React.Fragment>
        { dplMd && dplMd ? (
            <MdLayout>
                <Md>
                    <p>
                        Connect your wallet to start collecting items on this platform.
                        {/* This marketplace is only for demo purposes. Transactions are real. Non-Fungible Tokens ownership is not. */}
                    </p>
                    <BtnClose onClick={ () => closeMd() }>
                        <Image src="/close.svg" alt="x" width="20" height="20" />
                    </BtnClose>
                </Md>
            </MdLayout>
        ) : null }
        </React.Fragment>
    )
}
