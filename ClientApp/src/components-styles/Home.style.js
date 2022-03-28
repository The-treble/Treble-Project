import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundImg = styled.div`
width: 100%;    
display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
        color: #fff;
    }
    @media screen and (max-width: 768px) {
        height: 110vh;
    }
`

export const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 1000px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    background: transparent;
    h1 {
        font-size: clamp(1.25rem, 5vw, 2.5rem);
        margin-bottom: 50px;
        margin-top: 50px;
        box-shadow: 3px 5px #34715F;
        letter-spacing: 3px;
        color: #8FBC94;
        text-shadow: -0.5px -0.5px 0 #0D6769, 0.5px -0.5px 0 #0D6769, -0.5px 0.5px 0 #0D6769, 0.5px 0.5px 0 #0D6769;
        font-family: "PT Sans";
    }
    p {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
        margin-bottom: 2rem;
        text-align: justify;
        text-indent: 50px;   
        line-height: 1.5;  
        color: #8FBC94;
        text-shadow: -0.5px -0.5px 0 #0D6769, 0.5px -0.5px 0 #0D6769, -0.5px 0.5px 0 #0D6769, 0.5px 0.5px 0 #0D6769;
        font-family: "PT Sans";
    }
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
        width: 418px;
    }
`
export const Wrapper = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
}       
`