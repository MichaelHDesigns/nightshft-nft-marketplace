import styled from 'styled-components'

// breakpoints
import { Device } from 'config/device-breakpoints'

// themes
import { Default } from 'config/themes'

export const Md = styled.div`
    min-height: 6em;
    height: auto;
    background-color: #131313;
    width: 130%;
    z-index: 10;
    border-radius: 10px;
    position: absolute;
    padding: 0;
    text-align: left;
    top: 3em;
    display: none;
    padding-left: 1em;


    @media (min-width: ${Device.laptop}){
        display: block;
    }
`

export const Title = styled.span`
    margin-top: 1em;
    font-size: .8rem;
    color: ${Default.White};
`

export const Container = styled.div`
    position: relative;
    padding: 1em 2em 1em 1em;
`

export const BtnClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: ${ Default.Gray };
`


export const ItemsList = styled.ul`
    padding: 0;

    li {
        list-style: none;
        display: flex;
        flex-direction: row;

        div {
            display: flex;
            flex-direction: column;
            margin-left: 1em;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            span {
                color: ${ Default.White };

                :last-child {
                    color: ${ Default.Gray };
                    font-size: .8rem;
                    font-weight: 500;
                    width: 80%
                }
            }
        }
    }
`