import React, { Component } from 'react';
import background from '../images/Home-background.jpg';
import {BackgroundImg, HomeBox, Button, ButtonLink, Wrapper} from '../components-styles/Home.style';

function Home() {
    return (
      <BackgroundImg style={{backgroundImage: `url(${background})`}}>
            <Wrapper>
                <HomeBox>
                    <h1>Treble-project (temporary title)</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </HomeBox>   
            </Wrapper>
      </BackgroundImg>
    );
}


export default Home
