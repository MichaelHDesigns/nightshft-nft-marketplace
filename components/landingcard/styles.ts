import styled from 'styled-components'

// config
import { Default } from 'config/themes'
import { Device } from 'config'

const artworkPath = "/da0bcdf2.webp"

export const Card = styled.div`
    user-select: none;
    height: 500px;
    width: 500px;
    box-shadow: 10px 18px 18px black;
    background-color: ${Default.SecondaryGray};
    border-radius: 10px 10px 21px 21px;
    position: relative;
    background: url(${ artworkPath });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: ${Device.mobileXS}) and (max-width: ${Device.mobileS}) {
        height: 400px;
        width: 240px;
    }

    @media screen and (min-width: ${Device.mobileS}) and (max-width: ${Device.mobileL}) {
        height: 500px;
        width: 280px;
    }

    @media screen and (min-width: ${Device.mobileL}) and (max-width: ${Device.tablet}) {
        height: 500px;
        width: 400px;
    }

    @media (min-width: ${Device.laptop}) {
        height: 80%;
        width: 75%;
    }
`

export const Guard = styled.div`
    width: 100%;
    position: absolute;
    bottom: -1px;
    padding: .2em 1.6em 1em 1.6em;
    right: 0;
    border-radius: 20px;

    h3 {
        color: ${Default.White};
        font-weight: 800;
    }

    p {
        margin-top: .4em;
    }

`

export const GuardBottomInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;

    #authorInfo {
        display: flex;
        flex-direction: column;
        margin-left: .8em;

        span {
            font-size: .7rem;
            color: ${Default.White};

            :last-child {
                font-size: .8rem;
            }
        }
    }
`

export const BtnLink = styled.button`
    position: absolute;
    top: 1em;
    right: 1em;
    background: transparent;
    border: none;
    outline: none;
`