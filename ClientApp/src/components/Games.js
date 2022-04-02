import React, { Component } from 'react';
import background from '../images/Games-background.jpg';
import pic1 from '../images/Game-pic1.jpg'
import pic2 from '../images/Game-pic2.jpg'
import { BackGround, Wrapper, List, Game1, Game2, Box1, Box2, Title1, Title2, Button1, ButtonLink } from '../components-styles/Games.style';


export class Games extends Component{
    static displayName = Games.name;


    render (){
        return (
            <BackGround style={{backgroundImage: `url(${background})`}}>
               <Wrapper>
                   <List>
                       <Box1>
                            <Title1><h6>PENALTY!</h6></Title1>
                            <Game1 style={{backgroundImage: `url(${pic1})`}}></Game1>
                            <ButtonLink to='/penalty'><Button1><h6>PLAY!</h6></Button1></ButtonLink>
                       </Box1>
                       <Box2>
                            <Title2><h6>QUIZ!</h6></Title2>
                            <Game2 style={{backgroundImage: `url(${pic2})`}}></Game2>
                            <ButtonLink to='/quiz'><Button1><h6>PLAY!</h6></Button1></ButtonLink>
                        </Box2>
                   </List>
               </Wrapper>
            </BackGround>
        );
    }
}