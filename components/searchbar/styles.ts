import styled from "styled-components";

// breakspoints
import { Device } from 'config/device-breakpoints'

// themes
import { Default } from 'config/themes'

export const SearchBar = styled.div`
    width: auto;
    float: right;
    display: flex;
    flex-direction: "row";
    justify-content: "center";
    align-items: "center";
    margin-left: auto;
    background-color: transparent;
    border-radius: 3px;
    box-shadow: 0 0 1px 1px ${Default.Gray};
    overflow: hidden;
    padding: .2em .8em;
    margin: 0 auto;
    display: none;
    transition: 1s;

    :hover {
        box-shadow: 0 0 1px 1px ${Default.White};
    }

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const SearchBarInput = styled.input`
    color: ${Default.White};
    font-size: 1rem;
    background: transparent;
    outline: none;
    border: none;
    margin-right: .4em;
    width: 100%;
    
    ::placeholder {
        color: ${Default.Gray};
        font-size: .8rem;
        font-weight: 700;
    }
`