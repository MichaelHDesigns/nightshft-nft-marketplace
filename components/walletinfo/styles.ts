import styled from "styled-components";

import { Device } from 'config'
import { Default } from 'config/themes'

export const BtnConnectWallet = styled.button`
    border-radius: 5px;
    color: ${Default.White};
    background-color: ${Default.MainBlue};
    outline: none;
    border: none;
    font-weight: medium;
    padding: .6em 1.5em;
    margin-right: 1em;
    display: none;

    :hover {
        cursor: pointer;
    }

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const WalletInfoMobile = styled.span`
    border-radius: 5px;
    margin-right: 1em;
    color: ${Default.Gray};
    font-size: .9rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: normal;

    span#account {
        border-radius: 5px;
        padding: .6em .8em;
        font-size: .8rem;
        float: right;
        font-weight: 600;
        margin-left: .6em;
        color: ${Default.White};
    }
`

export const WalletInfo = styled.span`
    background-color: #1A202C;
    border-radius: 5px;
    padding: .2em .2em .2em 1.2em;
    margin-right: 1em;
    font-size: .8rem;
    color: ${Default.White};
    display: none;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: normal;

    span {
        font-weight: 500;
    }

    span#balance {
        padding-left: .6em;
    }

    span#account {
        background-color: #111115;
        border-radius: 5px;
        padding: .6em .8em;
        font-size: .8rem;
        float: right;
        margin-left: .6em;
        color: ${Default.White};
    }

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const RouteLink = styled.a`
    color: ${Default.Gray};
    font-size: .9rem;
    font-weight: 700;
    cursor: pointer;
`