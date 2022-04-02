import React, { Component } from 'react'
import background from '../images/Community-background.jpg';
import { BackGround, Wrapper, LeaderBoard, Columns, LeaderBoard_title, Players, Stats, Search, Score, Placement, SearchBar, SearchButton, Column2} from '../components-styles/Community.style';

export class Community extends Component {
  render(){
    return (
        <BackGround style={{backgroundImage: `url(${background})`}}>
            <Wrapper>
                <Columns>
                    <LeaderBoard>
                      <LeaderBoard_title><h4>LEADERBOARD</h4></LeaderBoard_title>
                      <Players><h4>#1</h4></Players>
                    </LeaderBoard>
                    <Column2>
                      <Stats>
                        <Score><h4>Your score is:</h4><h4>15k</h4></Score>
                        <Placement><h4>Your placement is:</h4><h4>#1066</h4></Placement>
                      </Stats>
                      <Search>
                        <SearchBar placeholder='Enter username here'></SearchBar>
                        <SearchButton>Search</SearchButton>
                      </Search>
                    </Column2>
                </Columns>
            </Wrapper>
        </BackGround>
    );
  }
}

