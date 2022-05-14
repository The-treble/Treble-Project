import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Background = styled.div`
    width: 100%;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 60px;
`

export const RegisterBox = styled.div`
    border-radius: 5px;
    padding: 50px;
    margin-bottom: 40px;
    background-color: #fff;
    background: rgba(58, 81, 86, 0.5);
    text-align: center;
    height: 650px;
    padding-top: 40px;
    h2 {
        font-weight: 500;
        margin-bottom: 50px;
    }
    span {
        display: block;
        margin-top: 20px;
        color: #A0CED9;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 25px;
        font-style: italic;
        text-decoration: underline;
    }
    a{
        margin-left: 4px;
        color: #A0CED9;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const Input = styled.input`
    width: 100%;
    outline: none;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    
    &::placeholder {
        color: #dedede;
    }
    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`

export const Inputs = styled.div`
    margin-bottom: 24px;
    text-align: left;
    width: 410px;
    font-family: 'Roboto', sans-serif;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #fff;
        font-family: sans-serif;
        font-style: italic;
        font-weight: bold;
    }
    p {
        color: red;
        font-size: 12px;
    }
    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    a {
        color: #fff;
        font-family: sans-serif;
        font-style: italic;
        font-weight: bold;
        color: #3A5156;
    }
    @media screen and (max-width: 768px){
        width: 310px;
    }
`

export const ButtonLink = styled(Link)`
    border-radius: 10px;
    background: #A0CED9;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 150px;
    height: 45px;
    color: #fff;
    font-family: sans-serif;
    font-style: italic;
    font-weight: bold;
    color: #3A5156;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }
`