import styled from 'styled-components'

// config
import { 
    Default,
    Device
} from 'config'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10vh 2em;
    min-width: 100%;
    min-height: 90vh;

    @media (min-width: ${Device.mobileXS}){
        padding: 10vh 10vw;
    }
`

export const Title = styled.h1`
    color: ${Default.White};
`