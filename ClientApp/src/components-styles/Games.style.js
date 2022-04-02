import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const BackGround = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Wrapper = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
`

export const List = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
`

export const Box1 = styled.div``
export const Box2 = styled.div``

export const Title1 = styled.div`
    width: 280px;
    height: 50px;
    background: #103738;
    border-radius: 15px 15px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    h6{
        margin-top: 5px;
        color: #8FBC94;
    }

`


export const Title2 = styled.div`
    width: 280px;
    height: 50px;
    background: #103738;
    border-radius: 15px 15px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    h6{
        margin-top: 5px;
        color: #8FBC94;
    }

`

export const Game1 = styled.div`
    width: 280px;
    height: 380px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Game2 = styled.div`
    width: 280px;
    height: 380px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Button1 = styled.button`
    width: 280px;
    height: 50px;
    background: #103738;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    h6{
        margin-top: 5px;
        color: #8FBC94;
    }   
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #8FBC94;
`