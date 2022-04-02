import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`  
    background: #103738;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1450px) / 2);
    z-index: 100;
`

export const NavLink = styled(Link)`
    color: #8FBC94;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;

&:hover {
        transition: all 0.2s ease-in-out;
        color: #0D6769;
    }

&:active {
    color: #103738
    .h4{
        color: #103738;
    }
}
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;
    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #0D6769;
    padding: 10px 22px;
    color: #8FBC94;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8FBC94;
        color: #0D6769;
    }
`

export const Logo = styled.div`
    width: 60px;
    height: 60px;    
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
        transition: all 0.2s ease-in-out;
        width: 65px;
        height: 65px;
    }
`