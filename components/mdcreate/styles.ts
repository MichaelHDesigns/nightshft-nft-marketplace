import styled from 'styled-components'

// config
import { Default } from 'config/themes'
import { Device } from 'config/device-breakpoints'

export const MdLytVeil = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(0,0,0,.7);
`

export const Md = styled.div`
    background-color: ${Default.DarkGray};
    color: ${Default.White};
    width: 100%;
    z-index: 999;
    height: auto;
    border-radius: 10px;
    position: relative;
    padding: 4em 2em 2em 2em;
    /* overflow-y: scroll; */
    min-height: 90vh;

    @media (min-width: ${Device.mobileM}) {
        padding: 6em 4em 4em 4em;
        width: 100%;
    }

    @media (min-width: ${Device.tablet}) {
        padding: 2em;
        width: 60vw;
        min-height: 80%;
    }

    @media (min-width: ${Device.laptop}) {
        width: 45vw;
    }
`

export const BtnClose = styled.span`
    top: 1em;
    right: 2em;
    position: absolute;
    color: ${Default.Gray};
    cursor: pointer;
    font-size: .9rem;
    user-select: none;
`

export const TextInput = {
    width: "100%",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    outline: "none",
    marginBottom: ".8em",
    padding: ".8em 1em",
    borderRadius: "5px",
    color: Default.Gray,
    background: "transparent"
}

export const PriceInput = styled.div`
    width: 100%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    margin-bottom: .8em;
    padding: .6em 1em;
    border-radius: 5px;
    background: transparent;
    display: flex;
    flex-direction: row;

    span {
        margin-right: .4em;
        color: ${Default.MainBlue};
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        color: ${Default.Gray};
        background: transparent;
        margin-top: .1em;
    }
`

export const FileInput = styled.div`
    width: 100%;
    border: 2px rgba(255, 255, 255, 0.1);
    border-style: dashed;
    margin-bottom: .8em;
    padding: .6em 1em;
    border-radius: 15px;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        float: right;
        margin-left: auto;
        cursor: pointer;
    }

    span {
        color: ${Default.Gray};
        font-size: .8rem;
        width: 30%;
        font-weight: 600;
        user-select: none;

        :last-child {
            float: right;
            margin-left: auto;
            width: 50%;
            font-size: .8rem;
            font-weight: 500;
            color: ${Default.Gray};
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const BtnSubmit = styled.button`
    float: left;
    margin-right: auto;
    margin-top: .8em;
    padding: .6em 1em;
    border: none;
    outline: none;
    width: auto;
    color: ${Default.White};
    font-size: .9rem;
    background-color: ${Default.MainBlue};
    border-radius: 5px;
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;
`

export const ProgressBar = styled.div`
    height: 10px;
    width: 100%;
    position: relative;
    background-color: #D1D5DB;
    margin: 1em 0;

    div {
        width: ${props => props.progress}%;
        height: 100%;
        position: absolute;
        background-color: ${ props => props.progress < 60 ? "#A7F3D0" : "#34D399" };
    }
`

export const Title = styled.h2`
    margin: 0;
`

export const ImagePreview = styled.span`
    float: right;
`

export const ErrorMessage = styled.p`
    font-size: .7rem;
    color: #cc0000;
    margin-top: 1px;

     span {
         margin-right: 5px;
     }
`

// JSX
export const FormStyling = {
    margin: "2em 0 4em 0"
}