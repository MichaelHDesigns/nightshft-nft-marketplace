import React, { useState } from 'react'
import { formatEther } from "@ethersproject/units"
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useDispatch, useSelector } from 'react-redux'

// styles
import {
    BtnConnectWallet,
    WalletInfo,
    WalletInfoMobile,
    RouteLink
} from './styles'

// types
import { displayType } from 'types'

// redux actions
import { setConnection } from 'redux/market/actions'

export default function index({
    displayType,
    displayMenu,
    setDisplayMenu
}: {
    displayType: displayType,
    displayMenu: boolean,
    setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>
}) {
    // @ts-ignore
    const { connection } = useSelector(state => state.market)
    const dispatch = useDispatch()
    const [account, setAccount] = useState<string>(connection.address ?? null)
    const [ethBalance, setEthBalance] = useState<string>(connection.balance ?? null)

    const hdlConnectWallet = async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const address = await provider.getSigner().getAddress()
        const balance = parseFloat(formatEther(await provider.getBalance(address))).toFixed(3)

        setAccount(address)
        setEthBalance(balance)

        dispatch(setConnection({
            address,
            balance,
            instance: connection
        }))
    }

    if (displayType === 'mobile') {
        if (account) {
            return (
                <WalletInfoMobile>
                    <span id="balance">
                        ETH {ethBalance && ethBalance}
                    </span>
                    <span id="account">
                        { account &&
                        `${account.slice(0, 6)}...${account.slice(
                        account.length - 4,
                        account.length )}`}
                    </span>
                </WalletInfoMobile>
            )
        } else {
            return (
                <RouteLink
                onClick={() => {
                    setDisplayMenu(!displayMenu)
                    hdlConnectWallet()
                }}>Connect wallet</RouteLink>
            )
        }
    }

    if (account) {
        return (
            <WalletInfo>
                <svg width="20" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.25 13.5V14.25C19.25 15.075 18.425 15.75 17.4167 15.75H4.58333C3.56583 15.75 2.75 15.075 2.75 14.25V3.75C2.75 2.925 3.56583 2.25 4.58333 2.25H17.4167C18.425 2.25 19.25 2.925 19.25 3.75V4.5H11C9.9825 4.5 9.16667 5.175 9.16667 6V12C9.16667 12.825 9.9825 13.5 11 13.5H19.25ZM11 12H20.1667V6H11V12ZM14.6667 10.125C13.9058 10.125 13.2917 9.6225 13.2917 9C13.2917 8.3775 13.9058 7.875 14.6667 7.875C15.4275 7.875 16.0417 8.3775 16.0417 9C16.0417 9.6225 15.4275 10.125 14.6667 10.125Z" fill="white"/>
                </svg>
                <span id="balance">
                    ETH {ethBalance && ethBalance}
                </span>
                <span id="account">
                    { account &&
                    `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length )}`}
                </span>
            </WalletInfo>
        )
    } else {
        return (
            <BtnConnectWallet
                onClick={() => hdlConnectWallet()}>
                Connect wallet
            </BtnConnectWallet>
        )
    }
}
