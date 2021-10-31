import styled from "styled-components";

import { Device } from 'config'
import { Default } from 'config/themes'

export const Logo = styled.a`
    font-size: 1.4rem;
    font-family: "Jost-Black";
    color: ${Default.White};
    text-transform: lowercase;
    cursor: pointer;
    display: none;

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const LogoMobile = styled.h1`
    font-size: 1.2rem;
    font-family: "Poppins-Black";
    color: ${Default.White};
    margin: auto;
    display: none;

    @media (max-width: ${Device.laptop}) {
        display: flex;
    }
`

export const Navbar = styled.header`
    z-index: 10;
    user-select: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${Default.Gray};
    padding: .4em 4em;
    background-color: ${Default.DarkGray};

    @media (max-width: ${Device.laptop}) {
        padding: 1em;
    }
`

export const BtnCreate = styled.button`
    border-radius: 5px;
    color: ${Default.White};
    background-color: ${Default.DarkGray};
    outline: none;
    border: 1px solid ${Default.SecondaryBlue};
    font-weight: medium;
    padding: .6em 1.5em;
    display: none;

    :hover {
        cursor: pointer;
    }

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const WishlistCount = styled.span`
    margin-left: 5px;
    font-size: .8rem;
    color: ${Default.White};
    margin-top: 2px;
    font-weight: medium;
`


export const WishlistSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: .8em;
    display: none;
    float: right;
    margin-left: auto;

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`

export const NavbarSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;

    :first-child {
        display: flex;
        justify-content: left;
        width: 40%;
    }

    :nth-child(2){
        width: 25%;
    }

    :last-child {
        position: relative;
        width: 40%;
    }

    #heart {
        cursor: pointer;
    }

    @media (min-width: ${Device.laptop}) {
        :first-child {
            display: flex;
            justify-content: left;
            width: 35%;
        }

        :last-child {
            position: relative;
            width: 40%;
        }
    }

    #heartMobile {
        display: none;

        @media screen and (min-width: ${Device.mobileXS}) and (max-width: ${Device.laptop}) {
            display: inline-block;
            float: left;
            margin-right: auto;
        }
    }
`

export const MenuIcon = styled.button`
    display: none;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    @media screen and (min-width: ${Device.mobileXS}) and (max-width: ${Device.laptop}) {
        display: inline-block;
        float: right;
        margin-left: auto;
    }
`

export const RouteLink = styled.a`
    color: ${Default.Gray};
    font-size: .9rem;
    font-weight: 700;
    cursor: pointer;
`

export const RoutesList = styled.ul`
    list-style: none;
    display: none;

    li {
        padding: .4em .8em;
        border-radius: 5px;        
    }

    li:hover {
        background-color: ${Default.SecondaryGray};
    }

    @media (min-width: ${Device.laptop}) {
        display: flex;
    }
`


export const MenuMobile = styled.ul`
    z-index: 777;
    position: absolute;
    top: 1em;
    right: .5em;
    border-radius: 10px;
    background-color: ${Default.SecondaryGray};
    color: ${Default.Gray};
    padding: .4em .6em;
    display: none;
    list-style: none;

    li {
        display: "block";
        padding: .4em 1em;
    }

    li:hover {
        background-color: #131313;
    }

    @media (max-width: ${Device.laptop}) {
        display: block;
    }
`

