import React, { Component } from 'react'
import { Goalkeeper } from '../animated-resources/Goalkeeper';
import { Background } from '../components-styles/Penalty.style';
import '../animated-resources/animations.css'

export class Penalty extends Component {
    static displayName = Penalty.name;
    render(){
        return (
            <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1570277756464-146a053f8a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
                <Goalkeeper/>
            </Background>
        );
    }
}
