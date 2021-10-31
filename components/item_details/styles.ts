import styled from 'styled-components'

import { Default, Device } from 'config'

export const LytFullscreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    span {
        position: absolute;
        top: 2em;
        right: 3em;
        width: 33px;
        height: 33px;
        color: ${Default.Gray};
        z-index: 9999;
        cursor: pointer
    }
`

export const Main = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    padding: 5vh 10vw 5vh 10vw;
    flex-direction: column;
`

export const BtnGoBack = styled.a`
    color: ${Default.Gray};
    cursor: pointer;
    width: 70px;

    :hover {
        transition-duration: 200ms;
        color: ${Default.White};
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 85vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 4em;

    @media (min-width: ${Device.laptop}) {
        flex-direction: row;
    }
`

export const LeftPane = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    user-select: none;
`

export const RightPane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    overflow-y: hidden;
    padding: 4em 0;
    
    @media (min-width: ${Device.laptop}) {
        padding: 0 2em 0 4em;
    }
`

export const ImageFrame = styled.div`
    position: relative;
    min-width: 200px;
    min-height: 315px;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: ${Device.mobileL}) {
        min-width: 380px;
        min-height: 415px;
    }

    @media (min-width: ${Device.laptop}) {
        min-width: 480px;
        min-height: 515px;
    }
`

export const ImageFrameBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const BtnEnlarge = styled.span`
    cursor: pointer;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    top: .8em;
    right: .8em;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ArtworkTitle = styled.h1`
    margin: 0;
    color: ${Default.White};
    overflow-wrap: break-word;
    line-height: 1;
`

export const ArtworkDesc = styled.p`
    color: ${Default.Gray};
    font-size: .9rem;
    width: "100%";
    overflow-wrap: break-word;
`

export const AuthorInfo = styled.div`
    display: flex;

    div#contain {
        display: flex;
        flex-direction: row;
        width: 100%;

        div {
            margin-top: .4em;
            margin-left: .8em;

            span {
                font-size: .9rem;
                display: block;
                margin-top: -5px;
                color: ${Default.White};

                :first-child {
                    font-size: .7rem;
                    color: ${Default.Gray};
                }
            }
        }
    }
`

export const PricingInfo = styled.div`
    width: 100%;
    margin-top: .8em;

    span#desc {
        font-size: .7rem;
        color: ${Default.Gray};
    }

    div#contain {
        display: flex;
        flex-direction: row;
        align-items: left;
        color: ${Default.White};

        div {
            display: flex;
            align-items: center;

            span {
                margin-left: .4em;
                font-size: .8rem;
                font-weight: 500;

                :first-child {
                    font-size: 1.2rem;
                }
            }
        }
    }

    div#containB {
        padding: 2em 0;
        width: 100%;
        display: flex;
        flex-direction: column;

        button#buy {
            cursor: pointer;
            padding: .8em 2em;
            background-color: ${Default.MainBlue};
            color: ${Default.White};
            font-weight: 600;
            outline: none;
            border: none;
            min-width: 10vw;
            border-radius: 5px;
            margin-right: 0;
            
            @media (min-width: ${Device.tablet}) {
                margin-right: 1em;
            }
        }

        button#discover {
            cursor: pointer;
            padding: .8em 2em;
            border: 1px solid ${Default.SecondaryBlue};
            background: transparent;
            color: ${Default.White};
            font-weight: 600;
            outline: none;
            min-width: 10vw;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1em;

            svg {
                margin-right: .4em;
                margin-top: 1px;
            }

            @media (min-width: ${Device.tablet}) {
                margin-top: 0;
            }
        }

        @media (min-width: ${Device.tablet}) {
            flex-direction: row;
        }
    }
`

export const ContractInfo = styled.div`
    padding: .4em 0;
    width: 100%;

    div {
        font-size: .9rem;
        color: ${Default.White};
        display: block;

        word-break: break-word;

        :first-child {
            margin-bottom: .6em;

            span {
                font-size: .7rem;
                color: ${Default.Gray};
                display: block;

                :last-child {
                    font-size: .9rem;
                    color: ${Default.White};
                    display: block;
                }
            }
        }
    }

    div {
        span {
            font-size: .7rem;
            color: ${Default.Gray};
            display: block;

            :last-child {
                font-size: .9rem;
                color: ${Default.White};
                display: block;
            }
        }
    }
`

export const CurrentPriceSpan = styled.span`
    font-size: .7rem;
    color: ${Default.Gray};
`