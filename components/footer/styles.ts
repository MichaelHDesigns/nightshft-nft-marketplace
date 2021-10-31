import styled from 'styled-components'

// config
import { Default } from 'config'

export const Footer = styled.footer`
    border-top: 1px solid ${Default.Gray};
    padding: 1em;
    text-align: center;
    width: 100%;

    span {
        color: ${Default.White};
        font-weight: 500;
        font-size: .9rem;
    }
`