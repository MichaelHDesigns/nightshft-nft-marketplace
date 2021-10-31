import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

// redux actions
import { switchDisplayMd } from 'redux/mdpublishnew/actions';

// styles
import {
    Logo,
    MenuIcon,
    Navbar,
    RouteLink,
    BtnCreate,
    RoutesList,
    WishlistCount,
    WishlistSection,
    NavbarSection,
    LogoMobile,
    MenuMobile
} from './styles'

// config
import { 
    AppName
} from 'config'


// components
import WgtSearch from 'components/wgtsearch'
import SearchBar from 'components/searchbar'
import WalletInfo from 'components/walletinfo'


export default function navigation(){
    // @ts-ignore
    const { items } = useSelector(state => state.wishlist)
    const dispatch = useDispatch()
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    const [showResults, dplShowResults] = useState<boolean>(false)
    

    const hdlDisplayMd = () => dispatch(switchDisplayMd())

    return (
        <Navbar>
            <NavbarSection>
                <Link href="/wishlist">
                    <svg id="heartMobile" width="26px" height="21px" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="heart" d="M26.0499 5.37833C25.4115 4.78217 24.6534 4.30925 23.8191 3.98659C22.9848 3.66394 22.0905 3.49786 21.1874 3.49786C20.2843 3.49786 19.39 3.66394 18.5557 3.98659C17.7214 4.30925 16.9634 4.78217 16.3249 5.37833L14.9999 6.61499L13.6749 5.37833C12.3853 4.17469 10.6362 3.49849 8.8124 3.49849C6.98861 3.49849 5.23952 4.17469 3.9499 5.37833C2.66029 6.58197 1.93579 8.21445 1.93579 9.91666C1.93579 11.6189 2.66029 13.2514 3.9499 14.455L5.2749 15.6917L14.9999 24.7683L24.7249 15.6917L26.0499 14.455C26.6886 13.8591 27.1953 13.1516 27.541 12.3729C27.8868 11.5942 28.0647 10.7596 28.0647 9.91666C28.0647 9.07376 27.8868 8.23911 27.541 7.46041C27.1953 6.68171 26.6886 5.97421 26.0499 5.37833V5.37833Z" stroke={ items.length > 0 ? "#F1F1F1" : "#8A8A8A"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <Link href="/">
                    <Logo>{AppName}</Logo>
                </Link>
                <RoutesList>
                    <li>
                        <Link href="/explore">
                            <RouteLink>Explore</RouteLink>
                        </Link>
                    </li>
                </RoutesList>
            </NavbarSection>
            <NavbarSection style={{
                position: "relative"
            }}>
                <Link href="/">
                    <LogoMobile>{AppName}</LogoMobile>
                </Link>
                <SearchBar
                 showResults={showResults}
                 dplShowResults={dplShowResults} />
                { showResults &&
                    <WgtSearch
                     showResults={showResults}
                     dplShowResults={dplShowResults} /> 
                }
            </NavbarSection>
            <NavbarSection>
                <WishlistSection>
                    <Link href="/wishlist">
                        <svg id="heart" width="26px" height="21px" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="heart" d="M26.0499 5.37833C25.4115 4.78217 24.6534 4.30925 23.8191 3.98659C22.9848 3.66394 22.0905 3.49786 21.1874 3.49786C20.2843 3.49786 19.39 3.66394 18.5557 3.98659C17.7214 4.30925 16.9634 4.78217 16.3249 5.37833L14.9999 6.61499L13.6749 5.37833C12.3853 4.17469 10.6362 3.49849 8.8124 3.49849C6.98861 3.49849 5.23952 4.17469 3.9499 5.37833C2.66029 6.58197 1.93579 8.21445 1.93579 9.91666C1.93579 11.6189 2.66029 13.2514 3.9499 14.455L5.2749 15.6917L14.9999 24.7683L24.7249 15.6917L26.0499 14.455C26.6886 13.8591 27.1953 13.1516 27.541 12.3729C27.8868 11.5942 28.0647 10.7596 28.0647 9.91666C28.0647 9.07376 27.8868 8.23911 27.541 7.46041C27.1953 6.68171 26.6886 5.97421 26.0499 5.37833V5.37833Z" stroke={ items.length > 0 ? "#F1F1F1" : "#8A8A8A"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <WishlistCount>
                        { items && items.length >= 1 ? items.length : null }
                    </WishlistCount>
                </WishlistSection>

                <WalletInfo
                 displayMenu={displayMenu}
                 setDisplayMenu={setDisplayMenu}
                 displayType="desktop" />

                <BtnCreate
                onClick={() => hdlDisplayMd()}>Create</BtnCreate>
                
                <MenuIcon onClick={() => setDisplayMenu(!displayMenu)} >
                    <Image src="/hamburger.svg" alt="menu" id="menu" width="28px" height="28px" />
                </MenuIcon>
                { displayMenu && displayMenu ? 
                    <MenuMobile>
                        <li>
                            <RouteLink
                            onClick={() => {
                                setDisplayMenu(!displayMenu)
                                hdlDisplayMd()
                            }}>Create</RouteLink>
                        </li>
                        <li>
                            <WalletInfo
                             displayMenu={displayMenu}
                             setDisplayMenu={setDisplayMenu}
                             displayType="mobile" />
                        </li>
                        <li>
                            <Link href="/explore">
                                <RouteLink
                                onClick={() => setDisplayMenu(!displayMenu)}>Explore</RouteLink>
                            </Link>
                        </li>
                    </MenuMobile>
                : null }
            </NavbarSection>
        </Navbar>
    )
}