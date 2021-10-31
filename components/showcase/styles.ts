import styled from "styled-components"

// themes
import { Default } from 'config/themes'

// config
import { Device } from "config"

export const Hero = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 10vh 2em;

    span {
        color: ${Default.Gray};
        font-weight: 600;
        font-size: .7rem;

        :first-child {
            color: ${Default.White};
            font-weight: 500;
        }

        @media (min-width: ${Device.laptop}) {
            font-size: .9rem;
        }
    }

    h2, h3 {
        margin-bottom: 0;
    }

    p {
        font-size: .7rem;
        color: ${Default.Gray};
    }

    @media (min-width: ${Device.mobileL}) {
        padding: 10vh 15vw;
    }

    @media (min-width: ${Device.laptop}) {
        flex-direction: row;
    }
`

export const BtnExplore = styled.button`
    padding: .6em 1.4em;
    color: ${Default.White};
    font-weight: bold;
    font-size: .9rem;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${Default.MainBlue};
    border-radius: 5px;
    margin-right: .8em;

    @media (min-width: ${Device.laptop}) {
        margin-right: 1.5em;
        padding: .9em 3em;
    }
`

export const BtnCreate = styled.button`
    padding: .6em 1.4em;
    color: ${Default.White};
    font-weight: bold;
    font-size: .9rem;
    cursor: pointer;
    outline: none;
    background-color: ${Default.DarkGray};
    border: 1px solid ${Default.SecondaryBlue};
    border-radius: 5px;

    @media (min-width: ${Device.laptop}) {
        margin-right: 1.5em;
        padding: .9em 3em;
    }
`


export const Lyt = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${Default.White};

    :first-child {
        justify-content: center;
    }

    :last-child {
        align-items: center;
        margin-top: 3em;

        @media (min-width: ${Device.laptop}) {
            margin-top: 0;
        }    
    }

    @media (min-width: ${Device.laptop}) {
        min-height: 80vh;
    }
`

export const InfoSection = styled.div`
    span {
        text-transform: uppercase;
        font-size: .7rem;

        :first-child {
            color: ${Default.Gray};
        }

        @media (min-width: ${Device.laptop}) {
            font-size: .9rem;
        }
    }

    h1 {
        margin-top: 0;
        line-height: 30px;
        font-size: 3rem;
       
        @media (min-width: ${Device.laptop}) {
            line-height: 1;
            line-height: 40px;
            font-size: 2.8rem;
        }

        @media (min-width: ${Device.laptopL}) {
            line-height: 50px;
            font-size: 3.4rem;
        }

        @media (min-width: ${Device.desktop}) {
            font-size: 6rem;
            line-height: 80px;
        }
    }
`

export const CTASection = styled.div`
    display: flex;
    flex-direction: row;
`

export const CTRSection = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;

    div {
        :first-child {
            margin-right: 2em;
        }
    }
`