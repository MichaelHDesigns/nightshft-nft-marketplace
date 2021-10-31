import styled from 'styled-components'
import { Default } from 'config/themes'
import { Device } from 'config'

export const MdLayout = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
`

export const Md = styled.div`
    position: fixed;
    
    margin: auto;
    background-color: ${Default.SecondaryGray};
    text-align: center;
    padding: 0 1em;
    margin: auto;
    display: flex;
    flex-direction: row;
    bottom: 0;

    p {
        color: ${Default.White};
        font-weight: 500;
        font-size: .8rem;
        display: inline-block;
        margin-right: .4em;

        @media (min-width: ${Device.tablet}) {
            margin-right: .8em;
        }
    }

    img {
        display: block;
    }

    @media (min-width: ${Device.tablet}) {
        bottom: 1em;
        border-radius: 50px;
    }
`

export const BtnClose = styled.button`
    margin-top: 4px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
`