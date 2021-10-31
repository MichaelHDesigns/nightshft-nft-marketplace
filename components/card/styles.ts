import styled from "styled-components"

import { Device } from "config"
import { Default } from 'config/themes'


export const Card = styled.div`
    min-height: 400px;
    border-radius: 10px;
    width: 100%;
    position: relative;
    background-color: ${Default.SecondaryGray};
    margin: 2em 0 0 0;

    img {
        object-fit: cover;
        top: 0;
        height: 70%;
        border-radius: 10px 10px 0 0;
    }

    @media (min-width: ${Device.mobileL}) {
        min-height: 450px;
        width: 95%;
        margin: 1em;
    }

    @media (min-width: ${Device.tablet}) {
        width: 44%;
    }

    @media (min-width: ${Device.laptop}) {
        width: 29.2% !important;
    }
`

export const CardBackground = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    height: 75%;
    width: 100%;
    background-color: ${Default.SecondaryGray};
    overflow: hidden;

    img {
        transition: transform .5s ease;
        transition-delay: 100ms;

        :hover {
            transform: scale(1.8);
        }
    }
`

export const CardFooter = styled.div`
    height: 30%;
    width: 100%;
    padding: 2em 2em 1em 2em;
    bottom: 0;
    position: absolute;

    h3 {
        color: ${Default.White};
        font-weight: 800;
        margin-top: 0;
    }

    p {
        margin-top: .4em;
    }

    @media (min-width: ${Device.mobileL}){
        height: 25%;
        padding: 1em 2em 1em 1.5em;
    }
`

export const GuardBottomInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -.5em;
    color: ${Default.White};

    #authorInfo {
        display: flex;
        flex-direction: column;
        margin-left: .8em;

        span {
            font-size: .6rem;
            color: ${Default.Gray};

            :last-child {
                font-size: .7rem;
                color: ${Default.White};
            }
        }
    }

    #priceInfo {
        margin-top: .2em;
        margin-left: auto;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: ${Device.tablet}){
        margin-top: 1em;
    }
`

export const BtnInteraction = styled.button`
    z-index: 15;
    border-radius: 50px;
    height: 34px;
    width: 34px;
    position: absolute;
    top: .6em;
    right: .8em;
    border: none;
    outline: none;
    /* background: transparent; */
    background: rgba(0,0,0,.4);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        
        path {
            transition: 250ms;
            stroke: white;
        }
    }

    span {
        width: 450px;
        height: 40px;
    }
`