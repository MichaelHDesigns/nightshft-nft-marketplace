import styled from 'styled-components'

// breakspoints
import { Device } from 'config/device-breakpoints'

export const _Div = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    overflow-y: scroll;
    
    @media (min-width: ${Device.tablet}) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`