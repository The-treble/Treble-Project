import React from "react";
import styled from "styled-components";
import {FcPrevious, FcNext} from 'react-icons/fc'

export const Background = styled.div`
    width: 100%;
    background-color: #191919;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 95vh;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 95vh;
    justify-content: center;
    display: grid;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
`

export const Buttons = styled.div`
    width: 700px;
    justify-content: space-between;
    display: flex;
    margin-top: 50px;
    margin-left: 100px;
`

export const Previous = styled.button`
    width: 150px;
    height: 50px;
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

export const Submit = styled.button`
    width: 150px;
    height: 50px;
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

export const Next = styled.button`
    width: 150px;
    height: 50px;
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

export const Img = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
`

export const Question = styled.div`
    width: 300px;
    height: 80px;
    border-radius: 0px 0px 10px 10px;
    background: #103738;
    display: flex;
    justify-content: center;
    align-items: center;

    h6{
        color: #8FBC94;
    }
`

export const Answer = styled.input`
    width: 150%;
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

