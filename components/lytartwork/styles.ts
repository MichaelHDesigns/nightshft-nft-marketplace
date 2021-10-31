import styled from "styled-components"
import { Device } from "config"

export const Lyt = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    width: 100;
    min-height: 60vh;
    margin: 0;

    @media (min-width: ${Device.laptop}) {
        margin: 1em;
    }
`