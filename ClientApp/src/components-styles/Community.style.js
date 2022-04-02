import styled from 'styled-components';

export const BackGround = styled.div`
    width: 100%;
    height: 100%; 
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

export const Columns = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
`

export const LeaderBoard = styled.div``

export const LeaderBoard_title = styled.div`
    width: 480px;
    height: 65px;
    background: #103738;
    display: flex;
    justify-content: left;
    align-items: center;

    h4
    {
        margin-left: 30px;
        margin-top: 5px;
        color: #8FBC94;
    }
`

export const Players = styled.div`
    width: 480px;
    height: 65px;
    background: #103738;
    display: flex;
    justify-content: left;
    align-items: center;
    opacity: 0.3;

    h4
    {
        margin-left: 30px;
        margin-top: 5px;
        color: #8FBC94;
    }
`

export const Column2 = styled.div`
    display: grid;
    width: 500px;
`

export const Stats = styled.div`
    display: grid;
    justify-content: center;
`

export const Score = styled.div`
    width: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        color: #8FBC94;
    }
`

export const Placement = styled.div`
    width: 300px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        color: #8FBC94;
    }
`

export const Search = styled.div`
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    display: grid;
`



export const SearchBar = styled.input`
    width: 350px;
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

export const SearchButton = styled.button`
    width: 125px;
    height: 50px;
    margin-top: 45px;
    border-radius: 4px;
    background: #0D6769;
    padding: 13px 15px;
    color: #8FBC94;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 33%;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8FBC94;
        color: #0D6769;
    }
`